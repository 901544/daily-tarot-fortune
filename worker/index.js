export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const body = await request.json();
    const apiKey = env.AI_API_KEY;
    const apiEndpoint = env.AI_API_ENDPOINT || "https://api.deepseek.com/v1/chat/completions";

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    let prompt = "";
    let systemPrompt = "";

    if (body.type === "spread") {
      // 牌阵解牌模式
      const cardsText = body.cards.map((c, i) => {
        return [
          "【" + c.position + "】" + c.cardName + (c.isReversed ? "（逆位）" : "（正位）"),
          "  关键词：" + (c.keywords || []).join("、"),
          "  基础牌意：" + c.interpretation,
        ].join("\n");
      }).join("\n\n");

      systemPrompt = "你是一位专业的塔罗牌占卜师，擅长通过牌阵为用户的问题提供深入、温暖、有启发性的解读。";
      prompt = [
        "你是一位专业的塔罗牌占卜师。请根据以下牌阵为用户的问题提供详细解读。",
        "",
        "【用户问题】",
        body.question || "请给出综合解读",
        "",
        "【牌阵类型】" + body.spreadType,
        "",
        "【牌面信息】",
        cardsText,
        "",
        "【解读要求】",
        "1. 请综合分析所有牌面之间的关系，而不是孤立解读每张牌",
        "2. 结合用户的问题，给出至少300字的详细解读",
        "3. 分析要深入具体，建议要切实可行",
        "4. 语气温暖、积极、富有洞察力",
        "5. 结构清晰，可以按牌位逐一分析，最后给出综合建议",
        "",
        "请直接输出解读内容。",
      ].join("\n");
    } else {
      // 每日运势模式
      const card = body.card || {};
      const zodiac = body.zodiac || {};
      const isReversed = body.isReversed || false;

      systemPrompt = "你是一位专业的塔罗牌占卜师，擅长结合星座运势为用户提供温暖、积极的每日指引。";
      prompt = [
        "你是一位专业的塔罗牌占卜师，请根据以下信息为用户生成一份详细的每日运势解读：",
        "",
        "【抽牌信息】",
        "- 牌名：" + (card.name || "") + "（" + (card.nameEn || "") + "）",
        "- 牌面：" + (isReversed ? "逆位" : "正位"),
        "- 牌意关键词：" + (card.keywords || []).join("、"),
        "- 基础解读：" + (isReversed ? (card.reversedInterpretation || "") : (card.interpretation || "")),
        "",
        "【用户星座】",
        "- " + (zodiac.name || "") + "（" + (zodiac.dateRange || "") + "）",
        "- 星座元素：" + (zodiac.element || ""),
        "",
        "【解读要求】",
        "1. 语气温暖、积极、富有洞察力，避免负面或极端的表述",
        "2. 内容包括：整体运势、重点关注领域（爱情/事业/财富/健康中选择2-3个）、今日建议",
        "3. 篇幅控制在300字以内，语言优美流畅",
        "4. 不要使用专业术语，让用户容易理解",
        "5. 结尾加上一句鼓励的话语",
        "",
        "请直接输出解读内容，不需要其他开场白。",
      ].join("\n");
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + apiKey,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          temperature: 0.8,
          max_tokens: 1200,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("AI API error:", JSON.stringify(data));
        return new Response(JSON.stringify({ error: data.error?.message || "AI API error" }), {
          status: response.status,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }

      const interpretation = data.choices[0]?.message?.content?.trim() || "";

      return new Response(JSON.stringify({ interpretation }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("AI API error:", error);
      return new Response(JSON.stringify({ error: "Failed to fetch AI interpretation" }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};