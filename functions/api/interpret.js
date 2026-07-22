export async function onRequestPost(context) {
  const body = await context.request.json();
  const apiKey = context.env.AI_API_KEY;
  const apiEndpoint = context.env.AI_API_ENDPOINT || "https://api.deepseek.com/v1/chat/completions";

  if (!apiKey) {
    return new Response(JSON.stringify({ error: "API key not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let prompt = "";
  let systemPrompt = "";

  if (body.type === "spread") {
    const cardsText = body.cards.map((c) => {
      return [
        "\u3010" + c.position + "\u3011" + c.cardName + (c.isReversed ? "\uff08\u9006\u4f4d\uff09" : "\uff08\u6b63\u4f4d\uff09"),
        "  \u5173\u952e\u8bcd\uff1a" + (c.keywords || []).join("\u3001"),
        "  \u57fa\u7840\u724c\u610f\uff1a" + c.interpretation,
      ].join("\n");
    }).join("\n\n");

    systemPrompt = "\u4f60\u662f\u4e00\u4f4d\u4e13\u4e1a\u7684\u5854\u7f57\u724c\u5360\u535c\u5e08\uff0c\u64c5\u957f\u901a\u8fc7\u724c\u9635\u4e3a\u7528\u6237\u7684\u95ee\u9898\u63d0\u4f9b\u6df1\u5165\u3001\u6e29\u6696\u3001\u6709\u542f\u53d1\u6027\u7684\u89e3\u8bfb\u3002";
    prompt = [
      "\u4f60\u662f\u4e00\u4f4d\u4e13\u4e1a\u7684\u5854\u7f57\u724c\u5360\u535c\u5e08\u3002\u8bf7\u6839\u636e\u4ee5\u4e0b\u724c\u9635\u4e3a\u7528\u6237\u7684\u95ee\u9898\u63d0\u4f9b\u8be6\u7ec6\u89e3\u8bfb\u3002",
      "",
      "\u3010\u7528\u6237\u95ee\u9898\u3011",
      body.question || "\u8bf7\u7ed9\u51fa\u7efc\u5408\u89e3\u8bfb",
      "",
      "\u3010\u724c\u9635\u7c7b\u578b\u3011" + body.spreadType,
      "",
      "\u3010\u724c\u9762\u4fe1\u606f\u3011",
      cardsText,
      "",
      "\u3010\u89e3\u8bfb\u8981\u6c42\u3011",
      "1. \u8bf7\u7efc\u5408\u5206\u6790\u6240\u6709\u724c\u9762\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u800c\u4e0d\u662f\u5b64\u7acb\u89e3\u8bfb\u6bcf\u5f20\u724c",
      "2. \u7ed3\u5408\u7528\u6237\u7684\u95ee\u9898\uff0c\u7ed9\u51fa\u81f3\u5c11300\u5b57\u7684\u8be6\u7ec6\u89e3\u8bfb",
      "3. \u5206\u6790\u8981\u6df1\u5165\u5177\u4f53\uff0c\u5efa\u8bae\u8981\u5207\u5b9e\u53ef\u884c",
      "4. \u8bed\u6c14\u6e29\u6696\u3001\u79ef\u6781\u3001\u5bcc\u6709\u6d1e\u5bdf\u529b",
      "5. \u7ed3\u6784\u6e05\u6670\uff0c\u53ef\u4ee5\u6309\u724c\u4f4d\u9010\u4e00\u5206\u6790\uff0c\u6700\u540e\u7ed9\u51fa\u7efc\u5408\u5efa\u8bae",
      "",
      "\u8bf7\u76f4\u63a5\u8f93\u51fa\u89e3\u8bfb\u5185\u5bb9\u3002",
    ].join("\n");
  } else {
    const card = body.card || {};
    const zodiac = body.zodiac || {};
    const isReversed = body.isReversed || false;

    systemPrompt = "\u4f60\u662f\u4e00\u4f4d\u4e13\u4e1a\u7684\u5854\u7f57\u724c\u5360\u535c\u5e08\uff0c\u64c5\u957f\u7ed3\u5408\u661f\u5ea7\u8fd0\u52bf\u4e3a\u7528\u6237\u63d0\u4f9b\u6e29\u6696\u3001\u79ef\u6781\u7684\u6bcf\u65e5\u6307\u5f15\u3002";
    prompt = [
      "\u8bf7\u6839\u636e\u4ee5\u4e0b\u4fe1\u606f\u4e3a\u7528\u6237\u751f\u6210\u4e00\u4efd\u8be6\u7ec6\u7684\u6bcf\u65e5\u8fd0\u52bf\u89e3\u8bfb\uff1a",
      "",
      "\u3010\u62bd\u724c\u4fe1\u606f\u3011",
      "- \u724c\u540d\uff1a" + (card.name || "") + "\uff08" + (card.nameEn || "") + "\uff09",
      "- \u724c\u9762\uff1a" + (isReversed ? "\u9006\u4f4d" : "\u6b63\u4f4d"),
      "- \u724c\u610f\u5173\u952e\u8bcd\uff1a" + (card.keywords || []).join("\u3001"),
      "- \u57fa\u7840\u89e3\u8bfb\uff1a" + (isReversed ? (card.reversedInterpretation || "") : (card.interpretation || "")),
      "",
      "\u3010\u7528\u6237\u661f\u5ea7\u3011",
      "- " + (zodiac.name || "") + "\uff08" + (zodiac.dateRange || "") + "\uff09",
      "- \u661f\u5ea7\u5143\u7d20\uff1a" + (zodiac.element || ""),
      "",
      "\u3010\u89e3\u8bfb\u8981\u6c42\u3011",
      "1. \u8bed\u6c14\u6e29\u6696\u3001\u79ef\u6781\u3001\u5bcc\u6709\u6d1e\u5bdf\u529b",
      "2. \u5185\u5bb9\u5305\u62ec\uff1a\u6574\u4f53\u8fd0\u52bf\u3001\u91cd\u70b9\u5173\u6ce8\u9886\u57df\u3001\u4eca\u65e5\u5efa\u8bae",
      "3. \u7bc7\u5e45300\u5b57\u4ee5\u5185\uff0c\u8bed\u8a00\u4f18\u7f8e\u6d41\u7545",
      "4. \u4e0d\u8981\u4f7f\u7528\u4e13\u4e1a\u672f\u8bed",
      "5. \u7ed3\u5c3e\u52a0\u4e0a\u4e00\u53e5\u9f13\u52b1\u7684\u8bdd\u8bed",
      "",
      "\u8bf7\u76f4\u63a5\u8f93\u51fa\u89e3\u8bfb\u5185\u5bb9\u3002",
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
      return new Response(JSON.stringify({ error: data.error?.message || "AI API error" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const interpretation = data.choices[0]?.message?.content?.trim() || "";
    return new Response(JSON.stringify({ interpretation }), {
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch AI interpretation" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}