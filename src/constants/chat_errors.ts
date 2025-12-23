export const ERROR_MESSAGES: Record<string, string[]> = {
  en: [
    "Oops, the engineer spilled coffee on the server. Cleaning it up...",
    "AI is currently meditating. Please try again in a moment.",
    "Our hamsters stopped running on the wheel. Waking them up...",
    "A ghost in the shell caused a glitch. Rebooting exrocism protocols...",
    "The Internet is tired. Give it a second to catch its breath.",
    "Server is taking a nap. Shhh...",
    "We lost the connection in a black hole. Sending a rescue team...",
    "The bits and bytes got tangled. Untangling now...",
    "Error 404: Motivation not found. Just kidding, retrying...",
    "Aliens hijacked the signal. Negotiating release..."
  ],
  'zh-TW': [
    "哎呀，工程師打翻咖啡了，我先去打掃一下晚點再回答你。",
    "AI 正在冥想中，請稍後再試。",
    "我們的倉鼠罷工了，正在用葵瓜子賄賂牠們...",
    "系統被外星人綁架了，正在談判中...",
    "網路線被貓咬斷了，正在修復中...",
    "伺服器正在午睡，噓...別吵醒它。",
    "數據掉進黑洞了，正在派搜救隊去撈...",
    "處理器過熱，正在用電風扇吹涼...",
    "受到神秘力量干擾，請稍後再試。",
    "今天運勢不佳，建議稍後再問一次。"
  ],
  'zh-CN': [
    "哎呀，工程师打翻咖啡了，我先去打扫一下晚点再回答你。",
    "AI 正在冥想中，请稍后再试。",
    "我们的仓鼠罢工了，正在用葵瓜子贿赂它们...",
    "系统被外星人绑架了，正在谈判中...",
    "网线被猫咬断了，正在修复中...",
    "服务器正在午睡，嘘...别吵醒它。",
    "数据掉进黑洞了，正在派搜救队去捞...",
    "处理器过热，正在用电风扇吹凉...",
    "受到神秘力量干扰，请稍后再试。",
    "今天运势不佳，建议稍后再问一次。"
  ],
  ja: [
    "エンジニアがコーヒーをこぼしてしまいました。掃除中です...",
    "AIは瞑想中です。しばらくしてからもう一度お試しください。",
    "サーバーのハムスターが回し車を止めてしまいました。起こしています...",
    "システムが異世界に転生してしまいました。召喚中です...",
    "インターネットが少し疲れているようです。休憩させてください。",
    "サーバーはお昼寝中です。シーッ...",
    "データがブラックホールに吸い込まれました。救助隊を派遣中...",
    "コードが絡まってしまいました。ほどいています...",
    "エラー404：やる気が見つかりません。嘘です、再試行中...",
    "宇宙人からの受信を解析中... 少々お待ちください。"
  ],
  ko: [
    "엔지니어가 서버에 커피를 쏟았습니다. 닦고 있으니 잠시만요...",
    "AI가 명상 중입니다. 잠시 후 다시 시도해주세요.",
    "서버를 돌리는 햄스터가 파업 중입니다. 해바라기 씨로 협상 중...",
    "외계인이 신호를 가로챘습니다. 협상 진행 중...",
    "인터넷 선을 고양이가 물어뜯었습니다. 수리 중...",
    "서버가 낮잠을 자고 있습니다. 쉿...",
    "데이터가 블랙홀로 빠졌습니다. 구조대를 보내는 중...",
    "프로세서가 과열되었습니다. 선풍기로 식히는 중...",
    "미지의 힘에 의해 방해받고 있습니다. 잠시 후 다시 시도해주세요.",
    "오늘의 운세가 좋지 않네요. 나중에 다시 물어봐주세요."
  ]
};

export function getRandomErrorMessage(lang: string = 'en'): string {
  const messages = ERROR_MESSAGES[lang] || ERROR_MESSAGES['en'];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
