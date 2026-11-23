#!/bin/sh
export PATH=/Users/krishnamehta/.hwa-hackathon/tools/npm/bin:"$PATH"
export OPENCODE_DISABLE_AUTOUPDATE=1 OPENCODE_DISABLE_EXTERNAL_SKILLS=1 OPENCODE_DISABLE_CLAUDE_CODE=1
unset OPENCODE_CONFIG_CONTENT OPENCODE_CONFIG OPENCODE_CONFIG_DIR
cd "$(dirname "$0")" && export PWD="$(pwd)" && printf '\n\033[1;37;41m ONLY OPEN-SOURCE MODELS ARE ALLOWED \033[0m\n\033[31m  Pick one in /models (Qwen, DeepSeek, Kimi, GLM, gpt-oss, Llama, Mistral). Closed models (Claude, GPT, Gemini, Grok) are against the rules; any provider or your own API key is fine for open-source models.\033[0m\n\n' || exit 1
trap : INT
/opt/homebrew/bin/node .hwa/hwa-collect.mjs watch - </dev/null >/dev/null 2>&1 &
W=$!
/opt/homebrew/bin/node .hwa/hwa-collect.mjs pick - --report .hwa/pick.txt
S="$(cat .hwa/pick.txt 2>/dev/null)"
if [ "$S" = "stop" ]; then kill $W 2>/dev/null; wait $W 2>/dev/null; exit 1; fi
if [ -t 1 ]; then L=$(tput lines 2>/dev/null || echo 50); i=0; while [ $i -lt ${L:-50} ]; do echo; i=$((i+1)); done; printf '\033[H'; fi
if [ -n "$S" ]; then /Users/krishnamehta/.hwa-hackathon/tools/npm/bin/opencode -s "$S"; else /Users/krishnamehta/.hwa-hackathon/tools/npm/bin/opencode; fi
E=$?
if [ -t 1 ]; then printf '\033[0m\033[?25h\033[?1000l\033[?1002l\033[?1003l\033[?1006l\033[?2004l\r\n\033[J'; fi
kill $W 2>/dev/null
wait $W 2>/dev/null
/opt/homebrew/bin/node .hwa/hwa-collect.mjs seal - </dev/null >/dev/null 2>&1
if [ -t 1 ]; then printf '\n\033[1m OpenCode has closed. Next, send your entry:\033[0m\n'; printf '  In this terminal, run: \033[1;7m %s \033[0m\n' 'python3 submit.py'; printf '  Your GitHub repo:  \033[1;36m%s\033[0m\n' https://github.com/Krishna-Mehta-135/a50105223108-hwa-hackathon; printf '  Your live site:    \033[1;36m%s\033[0m\n' https://a50105223108-hwa-hackathon.vercel.app; printf '  Use exactly these, on your hackathon page too.\n'; fi
exit $E
