// 日语单词数据
const VOCABULARY_DATA = [
  {
    "id": 1,
    "lesson": 3,
    "word": "わたし",
    "reading": "わたし",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "我"
  },
  {
    "id": 2,
    "lesson": 3,
    "word": "王",
    "reading": "おう",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "王(姓)"
  },
  {
    "id": 3,
    "lesson": 3,
    "word": "中国人",
    "reading": "ちゅうごくじん",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "中国人"
  },
  {
    "id": 4,
    "lesson": 3,
    "word": "日本人",
    "reading": "にほんじん",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "日本人"
  },
  {
    "id": 5,
    "lesson": 3,
    "word": "学生",
    "reading": "がくせい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "学生"
  },
  {
    "id": 6,
    "lesson": 3,
    "word": "会社員",
    "reading": "かいしゃいん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "公司职员"
  },
  {
    "id": 7,
    "lesson": 3,
    "word": "奥さん",
    "reading": "おくさん",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "夫人, 太太(对他人妻子的尊称)"
  },
  {
    "id": 8,
    "lesson": 3,
    "word": "子ども",
    "reading": "こども",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "孩子"
  },
  {
    "id": 9,
    "lesson": 3,
    "word": "北島",
    "reading": "きたじま",
    "pitch": "2",
    "pos": "[名(専)]",
    "meaning": "北岛(姓)"
  },
  {
    "id": 10,
    "lesson": 3,
    "word": "夫婦",
    "reading": "ふうふ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "夫妻"
  },
  {
    "id": 11,
    "lesson": 3,
    "word": "はい",
    "reading": "はい",
    "pitch": "1",
    "pos": "[嘆]",
    "meaning": "是, 好"
  },
  {
    "id": 12,
    "lesson": 3,
    "word": "そう",
    "reading": "そう",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "这样"
  },
  {
    "id": 13,
    "lesson": 3,
    "word": "いいえ",
    "reading": "いいえ",
    "pitch": "3",
    "pos": "[嘆]",
    "meaning": "不,不是"
  },
  {
    "id": 14,
    "lesson": 3,
    "word": "主婦",
    "reading": "しゅふ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "主妇, 家庭妇女"
  },
  {
    "id": 15,
    "lesson": 3,
    "word": "違います",
    "reading": "ちがいます",
    "pitch": "04",
    "pos": "[自動1]",
    "meaning": "不对, 不是"
  },
  {
    "id": 16,
    "lesson": 3,
    "word": "今日",
    "reading": "きょう",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "今天"
  },
  {
    "id": 17,
    "lesson": 3,
    "word": "どうぞ",
    "reading": "どうぞ",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "请,恳请(表示对他人提出请求)"
  },
  {
    "id": 18,
    "lesson": 3,
    "word": "えつ",
    "reading": "えつ",
    "pitch": "1",
    "pos": "[嘆]",
    "meaning": "啊! 欸! 怎么?"
  },
  {
    "id": 19,
    "lesson": 3,
    "word": "お子さん",
    "reading": "おこさん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "您的子女"
  },
  {
    "id": 20,
    "lesson": 3,
    "word": "ほら",
    "reading": "ほら",
    "pitch": "1",
    "pos": "[嘆]",
    "meaning": "喂,哎,喏"
  },
  {
    "id": 21,
    "lesson": 3,
    "word": "あいさつ",
    "reading": "あいさつ",
    "pitch": "1",
    "pos": "[名・自動3]",
    "meaning": "问候,寒暄,打招呼"
  },
  {
    "id": 22,
    "lesson": 3,
    "word": "小学生",
    "reading": "しょうがくせい",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "小学生"
  },
  {
    "id": 23,
    "lesson": 3,
    "word": "幼稚園",
    "reading": "ようちえん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "幼儿园"
  },
  {
    "id": 24,
    "lesson": 3,
    "word": "園児",
    "reading": "えんじ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "幼儿园的儿童"
  },
  {
    "id": 25,
    "lesson": 4,
    "word": "これ",
    "reading": "これ",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "这个"
  },
  {
    "id": 26,
    "lesson": 4,
    "word": "何",
    "reading": "なん",
    "pitch": "1",
    "pos": "[代]",
    "meaning": "什么"
  },
  {
    "id": 27,
    "lesson": 4,
    "word": "教科書",
    "reading": "きょうかしょ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "课本"
  },
  {
    "id": 28,
    "lesson": 4,
    "word": "それ",
    "reading": "それ",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "那个"
  },
  {
    "id": 29,
    "lesson": 4,
    "word": "MP3 プレーヤー",
    "reading": "エムピースリー player",
    "pitch": "6+2",
    "pos": "[名]",
    "meaning": "MP3 播放器"
  },
  {
    "id": 30,
    "lesson": 4,
    "word": "会社",
    "reading": "かいしゃ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "公司"
  },
  {
    "id": 31,
    "lesson": 4,
    "word": "カメラ",
    "reading": "camera",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "照相机"
  },
  {
    "id": 32,
    "lesson": 4,
    "word": "あれ",
    "reading": "あれ",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "那个"
  },
  {
    "id": 33,
    "lesson": 4,
    "word": "車",
    "reading": "くるま",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "汽车"
  },
  {
    "id": 34,
    "lesson": 4,
    "word": "この",
    "reading": "この",
    "pitch": "0",
    "pos": "[連体]",
    "meaning": "这个"
  },
  {
    "id": 35,
    "lesson": 4,
    "word": "建物",
    "reading": "たてもの",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "建筑物"
  },
  {
    "id": 36,
    "lesson": 4,
    "word": "本社",
    "reading": "ほんしゃ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "公司总部,总公司"
  },
  {
    "id": 37,
    "lesson": 4,
    "word": "ピル",
    "reading": "building",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "大楼, 高楼, 大厦"
  },
  {
    "id": 38,
    "lesson": 4,
    "word": "あの",
    "reading": "あの",
    "pitch": "0",
    "pos": "[連体]",
    "meaning": "那个"
  },
  {
    "id": 39,
    "lesson": 4,
    "word": "人",
    "reading": "ひと",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "人"
  },
  {
    "id": 40,
    "lesson": 4,
    "word": "データ",
    "reading": "data",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "数据"
  },
  {
    "id": 41,
    "lesson": 4,
    "word": "通信",
    "reading": "つうしん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "通信, 通讯"
  },
  {
    "id": 42,
    "lesson": 4,
    "word": "社員",
    "reading": "しゃいん",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "职员"
  },
  {
    "id": 43,
    "lesson": 4,
    "word": "外国人",
    "reading": "がいこくじん",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "外国人"
  },
  {
    "id": 44,
    "lesson": 4,
    "word": "登録",
    "reading": "とうろく",
    "pitch": "0",
    "pos": "[名・他動3]",
    "meaning": "登记"
  },
  {
    "id": 45,
    "lesson": 4,
    "word": "申請用紙",
    "reading": "しんせいようし",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "申请表"
  },
  {
    "id": 46,
    "lesson": 4,
    "word": "受付",
    "reading": "うけつけ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "前台,接待"
  },
  {
    "id": 47,
    "lesson": 4,
    "word": "どれ",
    "reading": "どれ",
    "pitch": "1",
    "pos": "[代]",
    "meaning": "哪个"
  },
  {
    "id": 48,
    "lesson": 4,
    "word": "あの",
    "reading": "あの",
    "pitch": "0",
    "pos": "[嘆]",
    "meaning": "那个"
  },
  {
    "id": 49,
    "lesson": 4,
    "word": "中国",
    "reading": "ちゅうごく",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "中国"
  },
  {
    "id": 50,
    "lesson": 4,
    "word": "写真",
    "reading": "しゃしん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "照片"
  },
  {
    "id": 51,
    "lesson": 4,
    "word": "どなた",
    "reading": "どなた",
    "pitch": "1",
    "pos": "[代]",
    "meaning": "哪位(敬)"
  },
  {
    "id": 52,
    "lesson": 4,
    "word": "管理人",
    "reading": "かんりにん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "管理员"
  },
  {
    "id": 53,
    "lesson": 4,
    "word": "社宅",
    "reading": "しゃたく",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "职工宿舍"
  },
  {
    "id": 54,
    "lesson": 4,
    "word": "部屋",
    "reading": "へや",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "房间"
  },
  {
    "id": 55,
    "lesson": 4,
    "word": "かぎ",
    "reading": "かぎ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "钥匙"
  },
  {
    "id": 56,
    "lesson": 4,
    "word": "暗証番号",
    "reading": "あんしょうばんごう",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "密码"
  },
  {
    "id": 57,
    "lesson": 4,
    "word": "メールボックス",
    "reading": "mailbox",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "邮箱"
  },
  {
    "id": 58,
    "lesson": 5,
    "word": "あそこ",
    "reading": "あそこ",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "那边"
  },
  {
    "id": 59,
    "lesson": 5,
    "word": "ベンチ",
    "reading": "bench",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "长椅,长凳"
  },
  {
    "id": 60,
    "lesson": 5,
    "word": "男",
    "reading": "おとこ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "男性, 男子"
  },
  {
    "id": 61,
    "lesson": 5,
    "word": "ここ",
    "reading": "ここ",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "这里"
  },
  {
    "id": 62,
    "lesson": 5,
    "word": "CALL",
    "reading": "コール",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "电脑语音室"
  },
  {
    "id": 63,
    "lesson": 5,
    "word": "教室",
    "reading": "きょうしつ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "教室"
  },
  {
    "id": 64,
    "lesson": 5,
    "word": "トイレ",
    "reading": "toilet",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "厕所,卫生间"
  },
  {
    "id": 65,
    "lesson": 5,
    "word": "あちら",
    "reading": "あちら",
    "pitch": "0",
    "pos": "[代]",
    "meaning": "那边"
  },
  {
    "id": 66,
    "lesson": 5,
    "word": "テーブル",
    "reading": "table",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "桌子"
  },
  {
    "id": 67,
    "lesson": 5,
    "word": "上",
    "reading": "うえ",
    "pitch": "02",
    "pos": "[名]",
    "meaning": "上,上面,上边"
  },
  {
    "id": 68,
    "lesson": 5,
    "word": "雑誌",
    "reading": "ざっし",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "杂志"
  },
  {
    "id": 69,
    "lesson": 5,
    "word": "紅茶",
    "reading": "こうちゃ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "红茶"
  },
  {
    "id": 70,
    "lesson": 5,
    "word": "あります",
    "reading": "あります",
    "pitch": "3",
    "pos": "[自動1]",
    "meaning": "有,在(没有意志的事物)"
  },
  {
    "id": 71,
    "lesson": 5,
    "word": "公園",
    "reading": "こうえん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "公园"
  },
  {
    "id": 72,
    "lesson": 5,
    "word": "隣",
    "reading": "となり",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "隔壁,旁边;邻居"
  },
  {
    "id": 73,
    "lesson": 5,
    "word": "交番",
    "reading": "こうばん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "派出所(「交番所」的略语)"
  },
  {
    "id": 74,
    "lesson": 5,
    "word": "食堂",
    "reading": "しょくどう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "食堂"
  },
  {
    "id": 75,
    "lesson": 5,
    "word": "います",
    "reading": "います",
    "pitch": "2",
    "pos": "[自動 2]",
    "meaning": "有,在(具有意志的人或物)"
  },
  {
    "id": 76,
    "lesson": 5,
    "word": "入り口",
    "reading": "いりぐち",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "人口处"
  },
  {
    "id": 77,
    "lesson": 5,
    "word": "犬",
    "reading": "いぬ",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "犬,狗"
  },
  {
    "id": 78,
    "lesson": 5,
    "word": "はし",
    "reading": "はし",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "筷子"
  },
  {
    "id": 79,
    "lesson": 5,
    "word": "引っ越し屋",
    "reading": "ひっこしや",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "搬家公司"
  },
  {
    "id": 80,
    "lesson": 5,
    "word": "タンス",
    "reading": "タンス",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "衣柜,衣橱"
  },
  {
    "id": 81,
    "lesson": 5,
    "word": "棚",
    "reading": "たな",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "搁板,架,棚"
  },
  {
    "id": 82,
    "lesson": 5,
    "word": "箱",
    "reading": "はこ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "箱,盒,匣"
  },
  {
    "id": 83,
    "lesson": 5,
    "word": "近く",
    "reading": "ちかく",
    "pitch": "21",
    "pos": "[名]",
    "meaning": "近处,附近"
  },
  {
    "id": 84,
    "lesson": 5,
    "word": "自転車",
    "reading": "じてんしゃ",
    "pitch": "02",
    "pos": "[名]",
    "meaning": "自行车"
  },
  {
    "id": 85,
    "lesson": 5,
    "word": "向こう",
    "reading": "むこう",
    "pitch": "20",
    "pos": "[名]",
    "meaning": "对面, 前方"
  },
  {
    "id": 86,
    "lesson": 5,
    "word": "売り場",
    "reading": "うりば",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "柜台,售货处"
  },
  {
    "id": 87,
    "lesson": 5,
    "word": "帽子",
    "reading": "ぼうし",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "帽子"
  },
  {
    "id": 88,
    "lesson": 5,
    "word": "店員",
    "reading": "てんいん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "店员, 营业员"
  },
  {
    "id": 89,
    "lesson": 5,
    "word": "コーナー",
    "reading": "corner",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "角,角落;柜台"
  },
  {
    "id": 90,
    "lesson": 5,
    "word": "服",
    "reading": "ふく",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "衣服"
  },
  {
    "id": 91,
    "lesson": 6,
    "word": "一つ",
    "reading": "ひとつ",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "一个"
  },
  {
    "id": 92,
    "lesson": 6,
    "word": "しか",
    "reading": "しか",
    "pitch": "0",
    "pos": "[副助]",
    "meaning": "只此, 仅, 表示很少"
  },
  {
    "id": 93,
    "lesson": 6,
    "word": "スーツケース",
    "reading": "suitcase",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "行李箱"
  },
  {
    "id": 94,
    "lesson": 6,
    "word": "ワイシャツ",
    "reading": "white shirt",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "衬衫"
  },
  {
    "id": 95,
    "lesson": 6,
    "word": "冷蔵庫",
    "reading": "れいぞうこ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "冰箱"
  },
  {
    "id": 96,
    "lesson": 6,
    "word": "食べ物",
    "reading": "たべもの",
    "pitch": "32",
    "pos": "[名]",
    "meaning": "食物,吃的东西"
  },
  {
    "id": 97,
    "lesson": 6,
    "word": "吉田",
    "reading": "よしだ",
    "pitch": ". (1)",
    "pos": "[名(専)]",
    "meaning": "吉田(姓)"
  },
  {
    "id": 98,
    "lesson": 6,
    "word": "社長",
    "reading": "しゃちょう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "社长,总经理"
  },
  {
    "id": 99,
    "lesson": 6,
    "word": "うち",
    "reading": "うち",
    "pitch": "02",
    "pos": "[名]",
    "meaning": "家里,住家"
  },
  {
    "id": 100,
    "lesson": 6,
    "word": "事務所",
    "reading": "じむしょ",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "办公室"
  },
  {
    "id": 101,
    "lesson": 6,
    "word": "パソコン",
    "reading": "personal computer",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "电脑"
  },
  {
    "id": 102,
    "lesson": 6,
    "word": "島",
    "reading": "しま",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "岛,岛屿"
  },
  {
    "id": 103,
    "lesson": 6,
    "word": "バラ",
    "reading": "バラ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "蔷薇, 玫瑰"
  },
  {
    "id": 104,
    "lesson": 6,
    "word": "園長",
    "reading": "えんちょう",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "园长"
  },
  {
    "id": 105,
    "lesson": 6,
    "word": "見学",
    "reading": "けんがく",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "参观,参观学习"
  },
  {
    "id": 106,
    "lesson": 6,
    "word": "八つ",
    "reading": "やっつ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "八个"
  },
  {
    "id": 107,
    "lesson": 6,
    "word": "今",
    "reading": "いま",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "现在"
  },
  {
    "id": 108,
    "lesson": 6,
    "word": "動物",
    "reading": "どうぶつ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "动物"
  },
  {
    "id": 109,
    "lesson": 6,
    "word": "うさぎ",
    "reading": "うさぎ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "兔子"
  },
  {
    "id": 110,
    "lesson": 6,
    "word": "まあ",
    "reading": "まあ",
    "pitch": "1",
    "pos": "[嘆]",
    "meaning": "哎呀(表示吃惊、感叹等,多为女性使用)"
  },
  {
    "id": 111,
    "lesson": 6,
    "word": "鳥",
    "reading": "とり",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "包"
  },
  {
    "id": 112,
    "lesson": 7,
    "word": "休み",
    "reading": "やすみ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "休假,休息时间"
  },
  {
    "id": 113,
    "lesson": 7,
    "word": "いつ",
    "reading": "いつ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "何时, 什么时候"
  },
  {
    "id": 114,
    "lesson": 7,
    "word": "から",
    "reading": "から",
    "pitch": "1",
    "pos": "[格助]",
    "meaning": "从,由,自(表示动作、作用的起点)"
  },
  {
    "id": 115,
    "lesson": 7,
    "word": "まで",
    "reading": "まで",
    "pitch": "1",
    "pos": "[副助]",
    "meaning": "表示时间、空间的范围、限度"
  },
  {
    "id": 116,
    "lesson": 7,
    "word": "入社式",
    "reading": "にゅうしゃしき",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "迎新仪式"
  },
  {
    "id": 117,
    "lesson": 7,
    "word": "来週",
    "reading": "らいしゅう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "下周"
  },
  {
    "id": 118,
    "lesson": 7,
    "word": "月曜日",
    "reading": "げつようび",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "星期一"
  },
  {
    "id": 119,
    "lesson": 7,
    "word": "金曜日",
    "reading": "きんようび",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "星期五"
  },
  {
    "id": 120,
    "lesson": 7,
    "word": "昼休み",
    "reading": "ひるやすみ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "中午休息时间"
  },
  {
    "id": 121,
    "lesson": 7,
    "word": "夏休み",
    "reading": "なつやすみ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "暑假"
  },
  {
    "id": 122,
    "lesson": 7,
    "word": "年度",
    "reading": "ねんど",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "年度(学校、财务等行业的表示一年的时间单位)"
  },
  {
    "id": 123,
    "lesson": 7,
    "word": "始まります",
    "reading": "はじまります",
    "pitch": "5",
    "pos": "[自動1]",
    "meaning": "开始, 起始"
  },
  {
    "id": 124,
    "lesson": 7,
    "word": "仕事",
    "reading": "しごと",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "工作"
  },
  {
    "id": 125,
    "lesson": 7,
    "word": "終わります",
    "reading": "おわります",
    "pitch": "0",
    "pos": "[自動1]",
    "meaning": "结束, 完毕"
  },
  {
    "id": 126,
    "lesson": 7,
    "word": "来ます",
    "reading": "きます",
    "pitch": "2",
    "pos": "[自動3]",
    "meaning": "来"
  },
  {
    "id": 127,
    "lesson": 7,
    "word": "たくさん",
    "reading": "たくさん",
    "pitch": "0",
    "pos": "[副]",
    "meaning": "很多"
  },
  {
    "id": 128,
    "lesson": 7,
    "word": "みんな",
    "reading": "みんな",
    "pitch": "3",
    "pos": "[代・副]",
    "meaning": "大家,大伙儿;全,都"
  },
  {
    "id": 129,
    "lesson": 7,
    "word": "フレックス・タイム",
    "reading": "flextime",
    "pitch": "6",
    "pos": "[名]",
    "meaning": "弹性工作制"
  },
  {
    "id": 130,
    "lesson": 7,
    "word": "制度",
    "reading": "せいど",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "制度"
  },
  {
    "id": 131,
    "lesson": 7,
    "word": "勤務",
    "reading": "きんむ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "工作, 职务"
  },
  {
    "id": 132,
    "lesson": 7,
    "word": "時間",
    "reading": "じかん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "时间"
  },
  {
    "id": 133,
    "lesson": 7,
    "word": "大学院",
    "reading": "だいがくいん",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "大学研究生院"
  },
  {
    "id": 134,
    "lesson": 7,
    "word": "夜",
    "reading": "よる",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "夜,夜间"
  },
  {
    "id": 135,
    "lesson": 7,
    "word": "授業",
    "reading": "じゅぎょう",
    "pitch": "1",
    "pos": "[名·自動3]",
    "meaning": "授课"
  },
  {
    "id": 136,
    "lesson": 7,
    "word": "プロジェクト",
    "reading": "project",
    "pitch": "23",
    "pos": "[名]",
    "meaning": "项目,规划"
  },
  {
    "id": 137,
    "lesson": 7,
    "word": "メンバー",
    "reading": "member",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "成员"
  },
  {
    "id": 138,
    "lesson": 7,
    "word": "出張",
    "reading": "しゅっちょう",
    "pitch": "0",
    "pos": "[名・自動 3]",
    "meaning": "出差"
  },
  {
    "id": 139,
    "lesson": 7,
    "word": "大変",
    "reading": "たいへん",
    "pitch": "0",
    "pos": "[ナ形・副]",
    "meaning": "了不得,够受的;大变故"
  },
  {
    "id": 140,
    "lesson": 7,
    "word": "今週",
    "reading": "こんしゅう",
    "pitch": "( )",
    "pos": "[名]",
    "meaning": "本周,本星期"
  },
  {
    "id": 141,
    "lesson": 7,
    "word": "木曜日",
    "reading": "もくようび",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "星期四"
  },
  {
    "id": 142,
    "lesson": 7,
    "word": "日曜日",
    "reading": "にちようび",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "星期日"
  },
  {
    "id": 143,
    "lesson": 8,
    "word": "朝礼",
    "reading": "ちょうれい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "早会"
  },
  {
    "id": 144,
    "lesson": 8,
    "word": "します",
    "reading": "します",
    "pitch": "2",
    "pos": "[他動 3]",
    "meaning": "做,干"
  },
  {
    "id": 145,
    "lesson": 8,
    "word": "毎日",
    "reading": "まいにち",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "每日,每天"
  },
  {
    "id": 146,
    "lesson": 8,
    "word": "勉強",
    "reading": "べんきょう",
    "pitch": "0",
    "pos": "[名・自他動3]",
    "meaning": "学习"
  },
  {
    "id": 147,
    "lesson": 8,
    "word": "朝ご飯",
    "reading": "あさごはん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "早饭"
  },
  {
    "id": 148,
    "lesson": 8,
    "word": "食べます",
    "reading": "たべます",
    "pitch": "3",
    "pos": "[他動 2]",
    "meaning": "吃"
  },
  {
    "id": 149,
    "lesson": 8,
    "word": "喫茶店",
    "reading": "きっさてん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "咖啡馆"
  },
  {
    "id": 150,
    "lesson": 8,
    "word": "コーヒー",
    "reading": "coffee",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "咖啡"
  },
  {
    "id": 151,
    "lesson": 8,
    "word": "飲みます",
    "reading": "のみます",
    "pitch": "3",
    "pos": "[他動 1]",
    "meaning": "喝,饮"
  },
  {
    "id": 152,
    "lesson": 8,
    "word": "ミーティング",
    "reading": "meeting",
    "pitch": "(1)",
    "pos": "[名]",
    "meaning": "会合,集会"
  },
  {
    "id": 153,
    "lesson": 8,
    "word": "火曜日",
    "reading": "かようび",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "星期二"
  },
  {
    "id": 154,
    "lesson": 8,
    "word": "いっしょに",
    "reading": "いっしょに",
    "pitch": "0",
    "pos": "[副]",
    "meaning": "共同行动,一起"
  },
  {
    "id": 155,
    "lesson": 8,
    "word": "一人",
    "reading": "ひとり",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "一个人"
  },
  {
    "id": 156,
    "lesson": 8,
    "word": "働きます",
    "reading": "はたらきます",
    "pitch": "5",
    "pos": "[自他動1]",
    "meaning": "工作, 劳动"
  },
  {
    "id": 157,
    "lesson": 8,
    "word": "それから",
    "reading": "それから",
    "pitch": "04",
    "pos": "[連]",
    "meaning": "其次,接着,以后"
  },
  {
    "id": 158,
    "lesson": 8,
    "word": "メール",
    "reading": "mail",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "电子邮件"
  },
  {
    "id": 159,
    "lesson": 8,
    "word": "読みます",
    "reading": "よみます",
    "pitch": "3",
    "pos": "[他動1]",
    "meaning": "读,看,阅读"
  },
  {
    "id": 160,
    "lesson": 8,
    "word": "もう",
    "reading": "もう",
    "pitch": "12",
    "pos": "[副]",
    "meaning": "已经; 再"
  },
  {
    "id": 161,
    "lesson": 8,
    "word": "一度",
    "reading": "いちど",
    "pitch": "03",
    "pos": "[名・副]",
    "meaning": "一回,一次;一旦"
  },
  {
    "id": 162,
    "lesson": 8,
    "word": "昼ご飯",
    "reading": "ひるごはん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "午饭"
  },
  {
    "id": 163,
    "lesson": 8,
    "word": "屋上",
    "reading": "おくじょう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "屋顶上,屋顶平台(大楼等)"
  },
  {
    "id": 164,
    "lesson": 8,
    "word": "ぐらい",
    "reading": "ぐらい",
    "pitch": "① ①",
    "pos": "[名・副助]",
    "meaning": "多少"
  },
  {
    "id": 165,
    "lesson": 8,
    "word": "昼寝",
    "reading": "ひるね",
    "pitch": "0",
    "pos": "[名・自動3]",
    "meaning": "午睡,午觉"
  },
  {
    "id": 166,
    "lesson": 8,
    "word": "国際",
    "reading": "こくさい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "国际"
  },
  {
    "id": 167,
    "lesson": 8,
    "word": "ショー",
    "reading": "show",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "展示,展出,展览会"
  },
  {
    "id": 168,
    "lesson": 8,
    "word": "新製品",
    "reading": "しんせいひん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "新产品"
  },
  {
    "id": 169,
    "lesson": 8,
    "word": "紹介",
    "reading": "しょうかい",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "介绍"
  },
  {
    "id": 170,
    "lesson": 8,
    "word": "ポスター",
    "reading": "poster",
    "pitch": "①",
    "pos": "[名]",
    "meaning": "海报"
  },
  {
    "id": 171,
    "lesson": 8,
    "word": "ほうれんそう",
    "reading": "ほうれんそう",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "菠菜"
  },
  {
    "id": 172,
    "lesson": 8,
    "word": "野菜",
    "reading": "やさい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "蔬菜"
  },
  {
    "id": 173,
    "lesson": 8,
    "word": "報告",
    "reading": "ほうこく",
    "pitch": "0",
    "pos": "[名·他動 3]",
    "meaning": "告知,通知"
  },
  {
    "id": 174,
    "lesson": 8,
    "word": "連絡",
    "reading": "れんらく",
    "pitch": "0",
    "pos": "[名・自他動 3]",
    "meaning": "联络, 联系"
  },
  {
    "id": 175,
    "lesson": 8,
    "word": "相談",
    "reading": "そうだん",
    "pitch": "0",
    "pos": "[名・自動3]",
    "meaning": "商谈, 商议"
  },
  {
    "id": 176,
    "lesson": 8,
    "word": "みなさん",
    "reading": "みなさん",
    "pitch": "2",
    "pos": "[代]",
    "meaning": "大家"
  },
  {
    "id": 177,
    "lesson": 9,
    "word": "きれい",
    "reading": "きれい",
    "pitch": "1",
    "pos": "[ナ形]",
    "meaning": "美丽,漂亮,好看;洁净;整齐"
  },
  {
    "id": 178,
    "lesson": 9,
    "word": "撮ります",
    "reading": "とります",
    "pitch": "3",
    "pos": "[他動1]",
    "meaning": "拍摄,照相"
  },
  {
    "id": 179,
    "lesson": 9,
    "word": "上海",
    "reading": "しゃんはい",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "上海(地名)"
  },
  {
    "id": 180,
    "lesson": 9,
    "word": "夏",
    "reading": "なつ",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "夏季,夏天"
  },
  {
    "id": 181,
    "lesson": 9,
    "word": "暑い",
    "reading": "あつい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "热, 热的"
  },
  {
    "id": 182,
    "lesson": 9,
    "word": "東京",
    "reading": "とうきょう",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "东京(地名)"
  },
  {
    "id": 183,
    "lesson": 9,
    "word": "地下鉄",
    "reading": "ちかてつ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "地铁"
  },
  {
    "id": 184,
    "lesson": 9,
    "word": "便利",
    "reading": "べんり",
    "pitch": "1",
    "pos": "[名・ナ形]",
    "meaning": "便利,方便"
  },
  {
    "id": 185,
    "lesson": 9,
    "word": "給料",
    "reading": "きゅうりょう",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "工资,薪金,薪水"
  },
  {
    "id": 186,
    "lesson": 9,
    "word": "高い",
    "reading": "たかい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "高的;贵的"
  },
  {
    "id": 187,
    "lesson": 9,
    "word": "新しい",
    "reading": "あたらしい",
    "pitch": "4",
    "pos": "[イ形]",
    "meaning": "新的"
  },
  {
    "id": 188,
    "lesson": 9,
    "word": "楽しい",
    "reading": "たのしい",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "快乐的,愉快的,高兴的"
  },
  {
    "id": 189,
    "lesson": 9,
    "word": "孔雀",
    "reading": "くじゃく",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "孔雀"
  },
  {
    "id": 190,
    "lesson": 9,
    "word": "北海道",
    "reading": "ほっかいどう",
    "pitch": "3",
    "pos": "[名 (専)]",
    "meaning": "北海道(地名)"
  },
  {
    "id": 191,
    "lesson": 9,
    "word": "あまり",
    "reading": "あまり",
    "pitch": "3",
    "pos": "[副]",
    "meaning": "不大,不怎么(与后面的否定词相呼应)"
  },
  {
    "id": 192,
    "lesson": 9,
    "word": "京都",
    "reading": "きょうと",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "京都(地名)"
  },
  {
    "id": 193,
    "lesson": 9,
    "word": "にぎやか",
    "reading": "にぎやか",
    "pitch": "2",
    "pos": "[ナ形]",
    "meaning": "繁华,喧闹"
  },
  {
    "id": 194,
    "lesson": 9,
    "word": "稲本",
    "reading": "いなもと",
    "pitch": "2",
    "pos": "[名(専)]",
    "meaning": "稻本(姓)"
  },
  {
    "id": 195,
    "lesson": 9,
    "word": "赤い",
    "reading": "あかい",
    "pitch": "0",
    "pos": "[イ形]",
    "meaning": "红色的"
  },
  {
    "id": 196,
    "lesson": 9,
    "word": "いちばん",
    "reading": "いちばん",
    "pitch": "02",
    "pos": "[名・副]",
    "meaning": "第一, 最初, 最好, 最"
  },
  {
    "id": 197,
    "lesson": 9,
    "word": "新幹線",
    "reading": "しんかんせん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "新干线"
  },
  {
    "id": 198,
    "lesson": 9,
    "word": "切符",
    "reading": "きっぷ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "票(车票、入场券等)"
  },
  {
    "id": 199,
    "lesson": 9,
    "word": "早い",
    "reading": "はやい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "早的,时间提前的"
  },
  {
    "id": 200,
    "lesson": 9,
    "word": "かかります",
    "reading": "かかります",
    "pitch": "4",
    "pos": "[自動1]",
    "meaning": "花费,需要用"
  },
  {
    "id": 201,
    "lesson": 9,
    "word": "速い",
    "reading": "はやい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "快的,迅速的"
  },
  {
    "id": 202,
    "lesson": 9,
    "word": "広報室",
    "reading": "こうほうしつ",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "宣传部"
  },
  {
    "id": 203,
    "lesson": 9,
    "word": "話",
    "reading": "はなし",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "谈话, 传说, 事情"
  },
  {
    "id": 204,
    "lesson": 9,
    "word": "いろいろ",
    "reading": "いろいろ",
    "pitch": "0",
    "pos": "[名・副・ナ形]",
    "meaning": "各种各样,形形色色"
  },
  {
    "id": 205,
    "lesson": 9,
    "word": "どんな",
    "reading": "どんな",
    "pitch": "1",
    "pos": "[連体]",
    "meaning": "什么样的,如何的"
  },
  {
    "id": 206,
    "lesson": 9,
    "word": "デジカメ",
    "reading": "digital camera",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "数码照相机"
  },
  {
    "id": 207,
    "lesson": 9,
    "word": "小さい",
    "reading": "ちいさい",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "(面积、容积等)小的;年幼的"
  },
  {
    "id": 208,
    "lesson": 9,
    "word": "貸します",
    "reading": "かします",
    "pitch": "3",
    "pos": "[他動1]",
    "meaning": "借出,借给"
  },
  {
    "id": 209,
    "lesson": 9,
    "word": "V1V1",
    "reading": "V1V1",
    "pitch": "1",
    "pos": "[イ形]",
    "meaning": "好的,善良的,美的,漂亮的,幸运的"
  },
  {
    "id": 210,
    "lesson": 9,
    "word": "借ります",
    "reading": "かります",
    "pitch": "3",
    "pos": "[他動2]",
    "meaning": "借"
  },
  {
    "id": 211,
    "lesson": 10,
    "word": "牛丼",
    "reading": "ぎゅうどん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "牛肉盖浇饭"
  },
  {
    "id": 212,
    "lesson": 10,
    "word": "おいしい",
    "reading": "おいしい",
    "pitch": "03",
    "pos": "[イ形]",
    "meaning": "美味的, 好吃的"
  },
  {
    "id": 213,
    "lesson": 10,
    "word": "安い",
    "reading": "やすい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "低廉的, 便宜的"
  },
  {
    "id": 214,
    "lesson": 10,
    "word": "レストラン",
    "reading": "restaurant",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "西餐馆"
  },
  {
    "id": 215,
    "lesson": 10,
    "word": "料理",
    "reading": "りょうり",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "料理,菜"
  },
  {
    "id": 216,
    "lesson": 10,
    "word": "弁当",
    "reading": "べんとう",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "便当,盒饭"
  },
  {
    "id": 217,
    "lesson": 10,
    "word": "難しい",
    "reading": "むずかしい",
    "pitch": "40",
    "pos": "[イ形]",
    "meaning": "难懂的;繁琐的,复杂的;困难的"
  },
  {
    "id": 218,
    "lesson": 10,
    "word": "ちょっと",
    "reading": "ちょっと",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "稍微,一点(数量、程度)"
  },
  {
    "id": 219,
    "lesson": 10,
    "word": "甘い",
    "reading": "あまい",
    "pitch": "0",
    "pos": "[イ形]",
    "meaning": "甜的; 淡的"
  },
  {
    "id": 220,
    "lesson": 10,
    "word": "ディズニーランド",
    "reading": "Disneyland",
    "pitch": "5",
    "pos": "[名(専)]",
    "meaning": "迪斯尼乐园"
  },
  {
    "id": 221,
    "lesson": 10,
    "word": "ところ",
    "reading": "ところ",
    "pitch": "30",
    "pos": "[名]",
    "meaning": "地方"
  },
  {
    "id": 222,
    "lesson": 10,
    "word": "パレード",
    "reading": "parade",
    "pitch": "21",
    "pos": "[名]",
    "meaning": "游行"
  },
  {
    "id": 223,
    "lesson": 10,
    "word": "おもしろい",
    "reading": "おもしろい",
    "pitch": "4",
    "pos": "[イ形]",
    "meaning": "滑稽的;愉快的,快活的;精彩的,有趣的"
  },
  {
    "id": 224,
    "lesson": 10,
    "word": "毎晩",
    "reading": "まいばん",
    "pitch": "10",
    "pos": "[名]",
    "meaning": "每晚,每夜"
  },
  {
    "id": 225,
    "lesson": 10,
    "word": "ニュース",
    "reading": "news",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "新闻,报道,新闻节目"
  },
  {
    "id": 226,
    "lesson": 10,
    "word": "見ます",
    "reading": "みます",
    "pitch": "2",
    "pos": "[他動 2]",
    "meaning": "看"
  },
  {
    "id": 227,
    "lesson": 10,
    "word": "本",
    "reading": "ほん",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "书"
  },
  {
    "id": 228,
    "lesson": 10,
    "word": "忙しい",
    "reading": "いそがしい",
    "pitch": "4",
    "pos": "[イ形]",
    "meaning": "忙的, 忙碌的"
  },
  {
    "id": 229,
    "lesson": 10,
    "word": "歓迎会",
    "reading": "かんげいかい",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "欢迎会"
  },
  {
    "id": 230,
    "lesson": 10,
    "word": "遠い",
    "reading": "とおい",
    "pitch": "0",
    "pos": "[イ形]",
    "meaning": "远的"
  },
  {
    "id": 231,
    "lesson": 10,
    "word": "メニュー",
    "reading": "menu",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "菜单,菜式"
  },
  {
    "id": 232,
    "lesson": 10,
    "word": "多い",
    "reading": "おおい",
    "pitch": "1",
    "pos": "[イ形]",
    "meaning": "多的"
  },
  {
    "id": 233,
    "lesson": 10,
    "word": "丸い",
    "reading": "まるい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "圆的"
  },
  {
    "id": 234,
    "lesson": 10,
    "word": "アイスクリーム",
    "reading": "ice cream",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "冰激凌"
  },
  {
    "id": 235,
    "lesson": 10,
    "word": "テンプラ",
    "reading": "テンプラ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "天妇罗(油炸海味食品)"
  },
  {
    "id": 236,
    "lesson": 10,
    "word": "外",
    "reading": "そと",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "外部;室外;外面"
  },
  {
    "id": 237,
    "lesson": 10,
    "word": "熱い",
    "reading": "あつい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "热, 热的"
  },
  {
    "id": 238,
    "lesson": 10,
    "word": "冷たい",
    "reading": "つめたい",
    "pitch": "30",
    "pos": "[イ形]",
    "meaning": "冷的,凉的"
  },
  {
    "id": 239,
    "lesson": 10,
    "word": "味",
    "reading": "あじ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "味道"
  },
  {
    "id": 240,
    "lesson": 10,
    "word": "そろそろ",
    "reading": "そろそろ",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "就要,不久"
  },
  {
    "id": 241,
    "lesson": 10,
    "word": "二次会",
    "reading": "にじかい",
    "pitch": "02",
    "pos": "[名]",
    "meaning": "再聚会, 二次聚会"
  },
  {
    "id": 242,
    "lesson": 10,
    "word": "カラオケ",
    "reading": "カラオケ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "卡拉 OK"
  },
  {
    "id": 243,
    "lesson": 10,
    "word": "歌",
    "reading": "うた",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "歌, 歌曲"
  },
  {
    "id": 244,
    "lesson": 10,
    "word": "歌います",
    "reading": "うたいます",
    "pitch": "4",
    "pos": "[他動1]",
    "meaning": "唱"
  },
  {
    "id": 245,
    "lesson": 10,
    "word": "明るい",
    "reading": "あかるい",
    "pitch": "03",
    "pos": "[イ形]",
    "meaning": "明亮的; 爽朗的"
  },
  {
    "id": 246,
    "lesson": 10,
    "word": "元気",
    "reading": "げんき",
    "pitch": "1",
    "pos": "[名・ナ形]",
    "meaning": "精神,精力充沛,充满活力;健康,身体好"
  },
  {
    "id": 247,
    "lesson": 10,
    "word": "アメリカ",
    "reading": "America",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "美国"
  },
  {
    "id": 248,
    "lesson": 10,
    "word": "メロディー",
    "reading": "melody",
    "pitch": "①",
    "pos": "[名]",
    "meaning": "旋律,曲调"
  },
  {
    "id": 249,
    "lesson": 11,
    "word": "親切",
    "reading": "しんせつ",
    "pitch": "1",
    "pos": "[ナ形]",
    "meaning": "亲切,善意"
  },
  {
    "id": 250,
    "lesson": 11,
    "word": "先週",
    "reading": "せんしゅう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "上星期,上周"
  },
  {
    "id": 251,
    "lesson": 11,
    "word": "昨日",
    "reading": "きのう",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "昨天"
  },
  {
    "id": 252,
    "lesson": 11,
    "word": "映画",
    "reading": "えいが",
    "pitch": "01",
    "pos": "[名]",
    "meaning": "电影"
  },
  {
    "id": 253,
    "lesson": 11,
    "word": "テスト",
    "reading": "test",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "考试,考查;试验,检验"
  },
  {
    "id": 254,
    "lesson": 11,
    "word": "簡単",
    "reading": "かんたん",
    "pitch": "0",
    "pos": "[名・ナ形]",
    "meaning": "简单,简易,简便"
  },
  {
    "id": 255,
    "lesson": 11,
    "word": "日系企業",
    "reading": "にっけいきぎょう",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "日资企业"
  },
  {
    "id": 256,
    "lesson": 11,
    "word": "天気",
    "reading": "てんき",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "天气"
  },
  {
    "id": 257,
    "lesson": 11,
    "word": "絵はがき",
    "reading": "えはがき",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "美术明信片"
  },
  {
    "id": 258,
    "lesson": 11,
    "word": "友達",
    "reading": "ともだち",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "朋友"
  },
  {
    "id": 259,
    "lesson": 11,
    "word": "ビール",
    "reading": "beer",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "啤酒"
  },
  {
    "id": 260,
    "lesson": 11,
    "word": "歌舞伎",
    "reading": "かぶき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "歌舞伎"
  },
  {
    "id": 261,
    "lesson": 11,
    "word": "旅行",
    "reading": "りょこう",
    "pitch": "0",
    "pos": "[名・自動3]",
    "meaning": "旅行,旅游"
  },
  {
    "id": 262,
    "lesson": 11,
    "word": "土産",
    "reading": "みやげ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "礼品, 土特产, 礼物"
  },
  {
    "id": 263,
    "lesson": 11,
    "word": "買います",
    "reading": "かいます",
    "pitch": "3",
    "pos": "[他動 1]",
    "meaning": "买"
  },
  {
    "id": 264,
    "lesson": 11,
    "word": "温泉まんじゅう",
    "reading": "おんせんまんじゅう",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "温泉馒头"
  },
  {
    "id": 265,
    "lesson": 11,
    "word": "見舞います",
    "reading": "みまいます",
    "pitch": "4",
    "pos": "[他動 1]",
    "meaning": "问候,探望,拜访"
  },
  {
    "id": 266,
    "lesson": 11,
    "word": "心配",
    "reading": "しんぱい",
    "pitch": "0",
    "pos": "[名・他動3]",
    "meaning": "担心, 挂念"
  },
  {
    "id": 267,
    "lesson": 11,
    "word": "メモリー",
    "reading": "memory",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "存储器;记忆"
  },
  {
    "id": 268,
    "lesson": 11,
    "word": "ブース",
    "reading": "booth",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "摊位,包厢"
  },
  {
    "id": 269,
    "lesson": 11,
    "word": "客",
    "reading": "きゃく",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "客人"
  },
  {
    "id": 270,
    "lesson": 11,
    "word": "初めて",
    "reading": "はじめて",
    "pitch": "2",
    "pos": "[副]",
    "meaning": "第一次 ,"
  },
  {
    "id": 271,
    "lesson": 11,
    "word": "うどん",
    "reading": "うどん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "乌冬面,粗面条"
  },
  {
    "id": 272,
    "lesson": 11,
    "word": "言葉",
    "reading": "ことば",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "话语,词语"
  },
  {
    "id": 273,
    "lesson": 11,
    "word": "文章",
    "reading": "ぶんしょう",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "文章,作品"
  },
  {
    "id": 274,
    "lesson": 11,
    "word": "少し",
    "reading": "すこし",
    "pitch": "2",
    "pos": "[畐川]",
    "meaning": "一点,稍微"
  },
  {
    "id": 275,
    "lesson": 11,
    "word": "近い",
    "reading": "ちかい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "近"
  },
  {
    "id": 276,
    "lesson": 11,
    "word": "周り",
    "reading": "まわり",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "周围"
  },
  {
    "id": 277,
    "lesson": 11,
    "word": "休日",
    "reading": "きゅうじつ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "休息日,假日"
  },
  {
    "id": 278,
    "lesson": 12,
    "word": "大丈夫",
    "reading": "だいじょうぶ",
    "pitch": "3",
    "pos": "[副・ナ形]",
    "meaning": "不要紧,靠得住,没错儿,安全,放心"
  },
  {
    "id": 279,
    "lesson": 12,
    "word": "台風",
    "reading": "たいふう",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "台风"
  },
  {
    "id": 280,
    "lesson": 12,
    "word": "電車",
    "reading": "でんしゃ",
    "pitch": "01",
    "pos": "[名]",
    "meaning": "电车"
  },
  {
    "id": 281,
    "lesson": 12,
    "word": "遅れる",
    "reading": "おくれる",
    "pitch": "04",
    "pos": "[自動 2]",
    "meaning": "迟,晚,迟到"
  },
  {
    "id": 282,
    "lesson": 12,
    "word": "ケーキ",
    "reading": "cake",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "蛋糕,点心"
  },
  {
    "id": 283,
    "lesson": 12,
    "word": "遊園地",
    "reading": "ゆうえんち",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "游乐园"
  },
  {
    "id": 284,
    "lesson": 12,
    "word": "桜",
    "reading": "さくら",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "樱花"
  },
  {
    "id": 285,
    "lesson": 12,
    "word": "たぶん",
    "reading": "たぶん",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "恐怕,大概"
  },
  {
    "id": 286,
    "lesson": 12,
    "word": "終わり",
    "reading": "おわり",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "终,终了,结束"
  },
  {
    "id": 287,
    "lesson": 12,
    "word": "咲く",
    "reading": "さく",
    "pitch": "02",
    "pos": "[自動1]",
    "meaning": "花开"
  },
  {
    "id": 288,
    "lesson": 12,
    "word": "景気",
    "reading": "けいき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "景气"
  },
  {
    "id": 289,
    "lesson": 12,
    "word": "ボーナス",
    "reading": "bonus",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "奖金,补贴金"
  },
  {
    "id": 290,
    "lesson": 12,
    "word": "少ない",
    "reading": "すくない",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "少"
  },
  {
    "id": 291,
    "lesson": 12,
    "word": "雪",
    "reading": "ゆき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "雪,下雪"
  },
  {
    "id": 292,
    "lesson": 12,
    "word": "宿題",
    "reading": "しゅくだい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "作业,课外作业"
  },
  {
    "id": 293,
    "lesson": 12,
    "word": "面談",
    "reading": "めんだん",
    "pitch": "0",
    "pos": "[名・自動 3]",
    "meaning": "面谈, 当面交谈"
  },
  {
    "id": 294,
    "lesson": 12,
    "word": "担任",
    "reading": "たんにん",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "担任,担当"
  },
  {
    "id": 295,
    "lesson": 12,
    "word": "問題",
    "reading": "もんだい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "问题; 试题"
  },
  {
    "id": 296,
    "lesson": 12,
    "word": "給食",
    "reading": "きゅうしょく",
    "pitch": "0",
    "pos": "[名・自動 3]",
    "meaning": "伙食"
  },
  {
    "id": 297,
    "lesson": 12,
    "word": "牛乳",
    "reading": "ぎゅうにゅう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "牛奶"
  },
  {
    "id": 298,
    "lesson": 12,
    "word": "誕生日",
    "reading": "たんじょうび",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "生日"
  },
  {
    "id": 299,
    "lesson": 12,
    "word": "月",
    "reading": "つき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "月"
  },
  {
    "id": 300,
    "lesson": 12,
    "word": "毎月",
    "reading": "まいつき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "每月"
  },
  {
    "id": 301,
    "lesson": 12,
    "word": "お母さん",
    "reading": "おかあさん",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "母亲,妈妈"
  },
  {
    "id": 302,
    "lesson": 12,
    "word": "参加",
    "reading": "さんか",
    "pitch": "10",
    "pos": "[名・自動 3]",
    "meaning": "参加"
  },
  {
    "id": 303,
    "lesson": 12,
    "word": "お菓子",
    "reading": "おかし",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "糕点,零食"
  },
  {
    "id": 304,
    "lesson": 12,
    "word": "だいたい",
    "reading": "だいたい",
    "pitch": "0",
    "pos": "[名•副]",
    "meaning": "大致; 大体上"
  },
  {
    "id": 305,
    "lesson": 13,
    "word": "町内会",
    "reading": "ちょうないかい",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "居委会"
  },
  {
    "id": 306,
    "lesson": 13,
    "word": "入る",
    "reading": "はいる",
    "pitch": "1",
    "pos": "[自動1]",
    "meaning": "加入; 进入"
  },
  {
    "id": 307,
    "lesson": 13,
    "word": "窓",
    "reading": "まど",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "窗,窗户,窗子"
  },
  {
    "id": 308,
    "lesson": 13,
    "word": "開ける",
    "reading": "あける",
    "pitch": "03",
    "pos": "[他動 2]",
    "meaning": "开, 打开"
  },
  {
    "id": 309,
    "lesson": 13,
    "word": "ドア",
    "reading": "door",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "门"
  },
  {
    "id": 310,
    "lesson": 13,
    "word": "閉める",
    "reading": "しめる",
    "pitch": "2",
    "pos": "[他動 2]",
    "meaning": "关"
  },
  {
    "id": 311,
    "lesson": 13,
    "word": "テレビ",
    "reading": "テレビ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "电视机(「テレビジョン(television)」的略语"
  },
  {
    "id": 312,
    "lesson": 13,
    "word": "秋葉原",
    "reading": "あきはばら",
    "pitch": "3",
    "pos": "[名(専)]",
    "meaning": "秋叶原(地名)"
  },
  {
    "id": 313,
    "lesson": 13,
    "word": "山手線",
    "reading": "やまのてせん",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "山手线"
  },
  {
    "id": 314,
    "lesson": 13,
    "word": "乗る",
    "reading": "のる",
    "pitch": "0",
    "pos": "[自動 2]",
    "meaning": "乘"
  },
  {
    "id": 315,
    "lesson": 13,
    "word": "新宿",
    "reading": "しんじゅく",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "新宿(地名)"
  },
  {
    "id": 316,
    "lesson": 13,
    "word": "降りる",
    "reading": "おりる",
    "pitch": "2",
    "pos": "[自動 2]",
    "meaning": "下,下来,降,降落"
  },
  {
    "id": 317,
    "lesson": 13,
    "word": "都庁",
    "reading": "とちょう",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "东京都政府大楼"
  },
  {
    "id": 318,
    "lesson": 13,
    "word": "妹",
    "reading": "いもうと",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "妹妹"
  },
  {
    "id": 319,
    "lesson": 13,
    "word": "高校",
    "reading": "こうこう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "高中"
  },
  {
    "id": 320,
    "lesson": 13,
    "word": "出る",
    "reading": "でる",
    "pitch": "1",
    "pos": "[自動 2]",
    "meaning": "出去; 离开; 毕业"
  },
  {
    "id": 321,
    "lesson": 13,
    "word": "マーク",
    "reading": "mark",
    "pitch": "1",
    "pos": "[名・他動3]",
    "meaning": "标记"
  },
  {
    "id": 322,
    "lesson": 13,
    "word": "待つ",
    "reading": "まつ",
    "pitch": "①",
    "pos": "[他動 1]",
    "meaning": "等,等待"
  },
  {
    "id": 323,
    "lesson": 13,
    "word": "案内",
    "reading": "あんない",
    "pitch": "3",
    "pos": "[名·他動3]",
    "meaning": "介绍"
  },
  {
    "id": 324,
    "lesson": 13,
    "word": "会費",
    "reading": "かいひ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "会费"
  },
  {
    "id": 325,
    "lesson": 13,
    "word": "払う",
    "reading": "はらう",
    "pitch": "2",
    "pos": "[他動 1]",
    "meaning": "支付"
  },
  {
    "id": 326,
    "lesson": 13,
    "word": "初め",
    "reading": "はじめ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "开始"
  },
  {
    "id": 327,
    "lesson": 13,
    "word": "集める",
    "reading": "あつめる",
    "pitch": "3",
    "pos": "[他動 2]",
    "meaning": "集中, 收集"
  },
  {
    "id": 328,
    "lesson": 13,
    "word": "活動",
    "reading": "かつどう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "活动"
  },
  {
    "id": 329,
    "lesson": 13,
    "word": "掃除",
    "reading": "そうじ",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "扫除, 扫地"
  },
  {
    "id": 330,
    "lesson": 13,
    "word": "祭り",
    "reading": "まつり",
    "pitch": "03",
    "pos": "[名]",
    "meaning": "祭祀; 庙会"
  },
  {
    "id": 331,
    "lesson": 13,
    "word": "防災訓練",
    "reading": "ぼうさいくんれん",
    "pitch": "(5)",
    "pos": "[名]",
    "meaning": "抗灾训练"
  },
  {
    "id": 332,
    "lesson": 13,
    "word": "学童",
    "reading": "がくどう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "学童; 小学生"
  },
  {
    "id": 333,
    "lesson": 13,
    "word": "クラブ",
    "reading": "club",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "俱乐部"
  },
  {
    "id": 334,
    "lesson": 13,
    "word": "野球",
    "reading": "やきゅう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "棒球"
  },
  {
    "id": 335,
    "lesson": 13,
    "word": "かるた",
    "reading": "かるた",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "日本纸牌"
  },
  {
    "id": 336,
    "lesson": 13,
    "word": "編み物",
    "reading": "あみもの",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "编织(品)"
  },
  {
    "id": 337,
    "lesson": 13,
    "word": "大好き",
    "reading": "だいすき",
    "pitch": "1",
    "pos": "[ナ形]",
    "meaning": "非常喜欢"
  },
  {
    "id": 338,
    "lesson": 13,
    "word": "名前",
    "reading": "なまえ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "姓名"
  },
  {
    "id": 339,
    "lesson": 13,
    "word": "住所",
    "reading": "じゅうしょ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "地址"
  },
  {
    "id": 340,
    "lesson": 13,
    "word": "ボールペン",
    "reading": "ball pen",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "圆珠笔"
  },
  {
    "id": 341,
    "lesson": 14,
    "word": "薬局",
    "reading": "やっきょく",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "药房"
  },
  {
    "id": 342,
    "lesson": 14,
    "word": "渡す",
    "reading": "わたす",
    "pitch": "0",
    "pos": "[他動1]",
    "meaning": "给,交给,交付"
  },
  {
    "id": 343,
    "lesson": 14,
    "word": "会議",
    "reading": "かいぎ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "会议"
  },
  {
    "id": 344,
    "lesson": 14,
    "word": "大事",
    "reading": "だいじ",
    "pitch": "310",
    "pos": "[名・ナ形]",
    "meaning": "重大,重要,珍惜"
  },
  {
    "id": 345,
    "lesson": 14,
    "word": "書類",
    "reading": "しょるい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "文件"
  },
  {
    "id": 346,
    "lesson": 14,
    "word": "丁寧",
    "reading": "ていねい",
    "pitch": "1",
    "pos": "[名・ナ形]",
    "meaning": "礼貌; 认真"
  },
  {
    "id": 347,
    "lesson": 14,
    "word": "オリンピック",
    "reading": "Olympic",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "奥运会"
  },
  {
    "id": 348,
    "lesson": 14,
    "word": "1ヶ月",
    "reading": "いっかげつ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "一个月"
  },
  {
    "id": 349,
    "lesson": 14,
    "word": "教える",
    "reading": "おしえる",
    "pitch": "0",
    "pos": "[他動 2]",
    "meaning": "教,教授,指导"
  },
  {
    "id": 350,
    "lesson": 14,
    "word": "クライアント",
    "reading": "client",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "顾客"
  },
  {
    "id": 351,
    "lesson": 14,
    "word": "プレゼン",
    "reading": "プレゼン",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "介绍,演示(「プレゼンテーション"
  },
  {
    "id": 352,
    "lesson": 14,
    "word": "場所",
    "reading": "ばしょ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "场地,场所"
  },
  {
    "id": 353,
    "lesson": 14,
    "word": "商談",
    "reading": "しょうだん",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "谈生意, 商务谈判"
  },
  {
    "id": 354,
    "lesson": 14,
    "word": "クレーム",
    "reading": "claim",
    "pitch": "02",
    "pos": "[名]",
    "meaning": "索赔;要求,申诉"
  },
  {
    "id": 355,
    "lesson": 14,
    "word": "まず",
    "reading": "まず",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "首先,起初,第一"
  },
  {
    "id": 356,
    "lesson": 14,
    "word": "謝る",
    "reading": "あやまる",
    "pitch": "3",
    "pos": "[自他動1]",
    "meaning": "道歉, 赔礼; 谢绝"
  },
  {
    "id": 357,
    "lesson": 15,
    "word": "忘れる",
    "reading": "わすれる",
    "pitch": "0",
    "pos": "[他動 2]",
    "meaning": "忘,忘记,遗忘"
  },
  {
    "id": 358,
    "lesson": 15,
    "word": "パン",
    "reading": "パン",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "面包"
  },
  {
    "id": 359,
    "lesson": 15,
    "word": "コート",
    "reading": "coat",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "风衣, 上衣, 外套"
  },
  {
    "id": 360,
    "lesson": 15,
    "word": "着る",
    "reading": "きる",
    "pitch": "02",
    "pos": "[他動 2]",
    "meaning": "穿(衣服)"
  },
  {
    "id": 361,
    "lesson": 15,
    "word": "出かける",
    "reading": "でかける",
    "pitch": "0",
    "pos": "[自動2]",
    "meaning": "外出"
  },
  {
    "id": 362,
    "lesson": 15,
    "word": "香水",
    "reading": "こうすい",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "香水"
  },
  {
    "id": 363,
    "lesson": 15,
    "word": "びっくり",
    "reading": "びっくり",
    "pitch": "3",
    "pos": "[名・自動3]",
    "meaning": "吃惊,受惊"
  },
  {
    "id": 364,
    "lesson": 15,
    "word": "砂糖",
    "reading": "さとう",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "糖, 砂糖"
  },
  {
    "id": 365,
    "lesson": 15,
    "word": "入れる",
    "reading": "いれる",
    "pitch": "0",
    "pos": "[他動 2]",
    "meaning": "放进,装入,添加"
  },
  {
    "id": 366,
    "lesson": 15,
    "word": "ホテル",
    "reading": "hotel",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "宾馆, 西式旅馆"
  },
  {
    "id": 367,
    "lesson": 15,
    "word": "サービス",
    "reading": "service",
    "pitch": "1",
    "pos": "[名・自動3]",
    "meaning": "服务"
  },
  {
    "id": 368,
    "lesson": 15,
    "word": "サッカー",
    "reading": "soccer",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "足球"
  },
  {
    "id": 369,
    "lesson": 15,
    "word": "ひらがな",
    "reading": "ひらがな",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "平假名"
  },
  {
    "id": 370,
    "lesson": 15,
    "word": "遠足",
    "reading": "えんそく",
    "pitch": "0",
    "pos": "[名・自動3]",
    "meaning": "远足, 郊游"
  },
  {
    "id": 371,
    "lesson": 15,
    "word": "動物園",
    "reading": "どうぶつえん",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "动物园"
  },
  {
    "id": 372,
    "lesson": 15,
    "word": "オカピ",
    "reading": "okapi",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "霍 伽波"
  },
  {
    "id": 373,
    "lesson": 15,
    "word": "児童",
    "reading": "じどう",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "儿童"
  },
  {
    "id": 374,
    "lesson": 15,
    "word": "パンダ",
    "reading": "panda",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "熊猫(一般指大熊猫)"
  },
  {
    "id": 375,
    "lesson": 15,
    "word": "珍しい",
    "reading": "めずらしい",
    "pitch": "4",
    "pos": "[イ形]",
    "meaning": "稀奇的,珍奇的,罕见的"
  },
  {
    "id": 376,
    "lesson": 15,
    "word": "知る",
    "reading": "しる",
    "pitch": "0",
    "pos": "[他動 1]",
    "meaning": "懂,知道;认识;记得"
  },
  {
    "id": 377,
    "lesson": 15,
    "word": "キリン",
    "reading": "キリン",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "长颈鹿"
  },
  {
    "id": 378,
    "lesson": 15,
    "word": "仲間",
    "reading": "なかま",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "朋友,伙伴;同类"
  },
  {
    "id": 379,
    "lesson": 15,
    "word": "首",
    "reading": "くび",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "颈, 脖子; 头, 脑袋"
  },
  {
    "id": 380,
    "lesson": 15,
    "word": "長い",
    "reading": "ながい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "长的"
  },
  {
    "id": 381,
    "lesson": 15,
    "word": "短い",
    "reading": "みじかい",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "短的"
  },
  {
    "id": 382,
    "lesson": 15,
    "word": "足",
    "reading": "あし",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "脚部,下肢"
  },
  {
    "id": 383,
    "lesson": 15,
    "word": "自分",
    "reading": "じぶん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "自身, 自己"
  },
  {
    "id": 384,
    "lesson": 15,
    "word": "目",
    "reading": "め",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "眼睛"
  },
  {
    "id": 385,
    "lesson": 15,
    "word": "確かめる",
    "reading": "たしかめる",
    "pitch": "4",
    "pos": "[他動1]",
    "meaning": "弄清, 查明, 确认"
  },
  {
    "id": 386,
    "lesson": 15,
    "word": "かきます",
    "reading": "かきます",
    "pitch": "3",
    "pos": "[他動 1]",
    "meaning": "画,描绘"
  },
  {
    "id": 387,
    "lesson": 15,
    "word": "プリント",
    "reading": "print",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "印刷品"
  },
  {
    "id": 388,
    "lesson": 15,
    "word": "道具",
    "reading": "どうぐ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "工具; 器具"
  },
  {
    "id": 389,
    "lesson": 16,
    "word": "花火",
    "reading": "はなび",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "烟花"
  },
  {
    "id": 390,
    "lesson": 16,
    "word": "とき",
    "reading": "とき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "时,时间"
  },
  {
    "id": 391,
    "lesson": 16,
    "word": "寂しい",
    "reading": "さびしい",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "寂寞的, 孤寂的"
  },
  {
    "id": 392,
    "lesson": 16,
    "word": "音楽",
    "reading": "おんがく",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "音乐"
  },
  {
    "id": 393,
    "lesson": 16,
    "word": "聞く",
    "reading": "きく",
    "pitch": "0",
    "pos": "[他動 1]",
    "meaning": "侧耳倾听, 倾听"
  },
  {
    "id": 394,
    "lesson": 16,
    "word": "ゲーム",
    "reading": "game",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "游戏"
  },
  {
    "id": 395,
    "lesson": 16,
    "word": "洗う",
    "reading": "あらう",
    "pitch": "0",
    "pos": "[他動1]",
    "meaning": "洗"
  },
  {
    "id": 396,
    "lesson": 16,
    "word": "レシピ",
    "reading": "recipe",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "菜谱"
  },
  {
    "id": 397,
    "lesson": 16,
    "word": "バス",
    "reading": "bus",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "公交车"
  },
  {
    "id": 398,
    "lesson": 16,
    "word": "駅前",
    "reading": "えきまえ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "(地铁、电车等)车站前面"
  },
  {
    "id": 399,
    "lesson": 16,
    "word": "つれる",
    "reading": "つれる",
    "pitch": "0",
    "pos": "[自他動 2]",
    "meaning": "率领,带着;跟从,伴随"
  },
  {
    "id": 400,
    "lesson": 16,
    "word": "散歩",
    "reading": "さんぽ",
    "pitch": "0",
    "pos": "[名・自動3]",
    "meaning": "散步"
  },
  {
    "id": 401,
    "lesson": 16,
    "word": "娘",
    "reading": "むすめ",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "女儿;姑娘,少女"
  },
  {
    "id": 402,
    "lesson": 16,
    "word": "アメリカ人",
    "reading": "America じん",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "美国人"
  },
  {
    "id": 403,
    "lesson": 16,
    "word": "けんか",
    "reading": "けんか",
    "pitch": "0",
    "pos": "[名・自動3]",
    "meaning": "争吵, 吵架, 打架"
  },
  {
    "id": 404,
    "lesson": 16,
    "word": "スピーチ",
    "reading": "speech",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "演讲"
  },
  {
    "id": 405,
    "lesson": 16,
    "word": "ポイント",
    "reading": "point",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "要点"
  },
  {
    "id": 406,
    "lesson": 16,
    "word": "ゆっくり",
    "reading": "ゆっくり",
    "pitch": "3",
    "pos": "[副]",
    "meaning": "慢慢地"
  },
  {
    "id": 407,
    "lesson": 16,
    "word": "はっきり",
    "reading": "はっきり",
    "pitch": "3",
    "pos": "[副]",
    "meaning": "清楚地"
  },
  {
    "id": 408,
    "lesson": 16,
    "word": "大きな",
    "reading": "おおきな",
    "pitch": "1",
    "pos": "[ナ形]",
    "meaning": "大, 巨大"
  },
  {
    "id": 409,
    "lesson": 16,
    "word": "花火大会",
    "reading": "はなびたいかい",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "焰火晚会"
  },
  {
    "id": 410,
    "lesson": 16,
    "word": "浴衣",
    "reading": "ゆかた",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "(日本人)夏季穿的单和服"
  },
  {
    "id": 411,
    "lesson": 16,
    "word": "楽しみ",
    "reading": "たのしみ",
    "pitch": "340",
    "pos": "[名・ナ形]",
    "meaning": "愉快, 快乐; 盼望, 期盼"
  },
  {
    "id": 412,
    "lesson": 16,
    "word": "小雨",
    "reading": "こさめ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "小雨,细雨"
  },
  {
    "id": 413,
    "lesson": 16,
    "word": "やる",
    "reading": "やる",
    "pitch": "( )",
    "pos": "[他動1]",
    "meaning": "做,干,进行"
  },
  {
    "id": 414,
    "lesson": 16,
    "word": "強い",
    "reading": "つよい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "强壮的;强烈的;强劲的"
  },
  {
    "id": 415,
    "lesson": 16,
    "word": "中止",
    "reading": "ちゅうし",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "中止, 停止进行"
  },
  {
    "id": 416,
    "lesson": 16,
    "word": "天気予報",
    "reading": "てんきよほう",
    "pitch": "4 .",
    "pos": "[名]",
    "meaning": "天气预报"
  },
  {
    "id": 417,
    "lesson": 16,
    "word": "晴れ",
    "reading": "はれ",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "晴,晴天"
  },
  {
    "id": 418,
    "lesson": 16,
    "word": "川",
    "reading": "かわ",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "河,川"
  },
  {
    "id": 419,
    "lesson": 16,
    "word": "喜ぶ",
    "reading": "よろこぶ",
    "pitch": "3",
    "pos": "[自他動1]",
    "meaning": "高兴, 喜悦, 欢喜"
  },
  {
    "id": 420,
    "lesson": 16,
    "word": "手",
    "reading": "て",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "手"
  },
  {
    "id": 421,
    "lesson": 16,
    "word": "離す",
    "reading": "はなす",
    "pitch": "2",
    "pos": "[他動 1]",
    "meaning": "放开, 使离开"
  },
  {
    "id": 422,
    "lesson": 16,
    "word": "しっかり",
    "reading": "しっかり",
    "pitch": "3",
    "pos": "[副・自動3]",
    "meaning": "结实,紧固,紧密"
  },
  {
    "id": 423,
    "lesson": 16,
    "word": "つなぐ",
    "reading": "つなぐ",
    "pitch": "0",
    "pos": "[他動 1]",
    "meaning": "绑, 系, 结"
  },
  {
    "id": 424,
    "lesson": 16,
    "word": "見物",
    "reading": "けんぶつ",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "观赏,游览,观光"
  },
  {
    "id": 425,
    "lesson": 16,
    "word": "のんびり",
    "reading": "のんびり",
    "pitch": "3",
    "pos": "[副・自動3]",
    "meaning": "悠闲自得"
  },
  {
    "id": 426,
    "lesson": 17,
    "word": "ユリ",
    "reading": "ユリ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "百合"
  },
  {
    "id": 427,
    "lesson": 17,
    "word": "電子マネー",
    "reading": "でんし money",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "电子货币"
  },
  {
    "id": 428,
    "lesson": 17,
    "word": "博多",
    "reading": "はかた",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "博多(地名)"
  },
  {
    "id": 429,
    "lesson": 17,
    "word": "果物",
    "reading": "くだもの",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "水果"
  },
  {
    "id": 430,
    "lesson": 17,
    "word": "カラス",
    "reading": "カラス",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "乌鸦"
  },
  {
    "id": 431,
    "lesson": 17,
    "word": "マイホーム",
    "reading": "my home",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "自己的房子"
  },
  {
    "id": 432,
    "lesson": 17,
    "word": "欲しい",
    "reading": "ほしい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "想要,渴望"
  },
  {
    "id": 433,
    "lesson": 17,
    "word": "液晶",
    "reading": "えきしょう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "液晶"
  },
  {
    "id": 434,
    "lesson": 17,
    "word": "富士山",
    "reading": "ふじさん",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "富士山"
  },
  {
    "id": 435,
    "lesson": 17,
    "word": "スポーツ",
    "reading": "sports",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "运动"
  },
  {
    "id": 436,
    "lesson": 17,
    "word": "イタリア",
    "reading": "Italia",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "意大利"
  },
  {
    "id": 437,
    "lesson": 17,
    "word": "ピザ",
    "reading": "pizza",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "(意大利典型食品之一)比萨"
  },
  {
    "id": 438,
    "lesson": 17,
    "word": "パスタ",
    "reading": "pasta",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "意大利面食(的总称)"
  },
  {
    "id": 439,
    "lesson": 17,
    "word": "トマト",
    "reading": "tomato",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "番茄,西红柿"
  },
  {
    "id": 440,
    "lesson": 17,
    "word": "顔",
    "reading": "かお",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "脸"
  },
  {
    "id": 441,
    "lesson": 17,
    "word": "かわいい・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・",
    "reading": "かわいい・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "可爱的, 招人喜欢的"
  },
  {
    "id": 442,
    "lesson": 17,
    "word": "持つ",
    "reading": "もつ",
    "pitch": "1",
    "pos": "[他動 1]",
    "meaning": "持,拿;带,携带"
  },
  {
    "id": 443,
    "lesson": 17,
    "word": "ケータイ",
    "reading": "ケータイ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "手机,移动电话(\"携带電話\"的略语)"
  },
  {
    "id": 444,
    "lesson": 17,
    "word": "一眼レフ",
    "reading": "いちがんレフ",
    "pitch": "5",
    "pos": "[名]",
    "meaning": "单镜头反光式照相机"
  },
  {
    "id": 445,
    "lesson": 17,
    "word": "見せる",
    "reading": "みせる",
    "pitch": "2",
    "pos": "[他動 2]",
    "meaning": "给看"
  },
  {
    "id": 446,
    "lesson": 18,
    "word": "迎える",
    "reading": "むかえる",
    "pitch": "0",
    "pos": "[他動 2]",
    "meaning": "接,迎接"
  },
  {
    "id": 447,
    "lesson": 18,
    "word": "就職",
    "reading": "しゅうしょく",
    "pitch": "0",
    "pos": "[名・自動 3]",
    "meaning": "就业"
  },
  {
    "id": 448,
    "lesson": 18,
    "word": "まだ",
    "reading": "まだ",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "尚,还;仍旧;才,仅仅(\"いまだ\"的约音)"
  },
  {
    "id": 449,
    "lesson": 18,
    "word": "秋",
    "reading": "あき",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "秋天"
  },
  {
    "id": 450,
    "lesson": 18,
    "word": "正月",
    "reading": "しょうがつ",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "一月,新年期间"
  },
  {
    "id": 451,
    "lesson": 18,
    "word": "クリスマス",
    "reading": "Christmas",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "圣诞节"
  },
  {
    "id": 452,
    "lesson": 18,
    "word": "祝日",
    "reading": "しゅくじつ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "(政府规定的)节日"
  },
  {
    "id": 453,
    "lesson": 18,
    "word": "プレゼント",
    "reading": "present",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "礼物"
  },
  {
    "id": 454,
    "lesson": 18,
    "word": "師走",
    "reading": "しわす",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "腊月"
  },
  {
    "id": 455,
    "lesson": 18,
    "word": "忘年会",
    "reading": "ぼうねんかい",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "年终联欢会"
  },
  {
    "id": 456,
    "lesson": 18,
    "word": "ブランド",
    "reading": "brand",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "商标,名牌"
  },
  {
    "id": 457,
    "lesson": 18,
    "word": "バッグ",
    "reading": "bag",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "包"
  },
  {
    "id": 458,
    "lesson": 18,
    "word": "特に",
    "reading": "とくに",
    "pitch": "1",
    "pos": "[副]",
    "meaning": "特别"
  },
  {
    "id": 459,
    "lesson": 18,
    "word": "込む",
    "reading": "こむ",
    "pitch": "1",
    "pos": "[自動1]",
    "meaning": "混杂,拥挤"
  },
  {
    "id": 460,
    "lesson": 18,
    "word": "本当",
    "reading": "ほんとう",
    "pitch": "0",
    "pos": "[名・ナ形]",
    "meaning": "真的"
  },
  {
    "id": 461,
    "lesson": 18,
    "word": "おせち料理",
    "reading": "おせちりょうり",
    "pitch": "4",
    "pos": "[名]",
    "meaning": "节日菜肴, 年节菜"
  },
  {
    "id": 462,
    "lesson": 18,
    "word": "楽",
    "reading": "らく",
    "pitch": "2",
    "pos": "[名・ナ形]",
    "meaning": "快乐;轻松;舒适"
  },
  {
    "id": 463,
    "lesson": 18,
    "word": "増える",
    "reading": "ふえる",
    "pitch": "2",
    "pos": "[自動2]",
    "meaning": "增加,增多"
  },
  {
    "id": 464,
    "lesson": 18,
    "word": "遅い",
    "reading": "おそい",
    "pitch": "20",
    "pos": "[イ形]",
    "meaning": "迟的,晚的;慢的"
  },
  {
    "id": 465,
    "lesson": 18,
    "word": "さっき",
    "reading": "さっき",
    "pitch": "1",
    "pos": "[名・副]",
    "meaning": "刚才"
  },
  {
    "id": 466,
    "lesson": 18,
    "word": "ずっと",
    "reading": "ずっと",
    "pitch": "0",
    "pos": "[副]",
    "meaning": "一直"
  },
  {
    "id": 467,
    "lesson": 18,
    "word": "あずさ",
    "reading": "あずさ",
    "pitch": "1",
    "pos": "[名(専)]",
    "meaning": "车组名"
  },
  {
    "id": 468,
    "lesson": 18,
    "word": "松本",
    "reading": "まつもと",
    "pitch": "4",
    "pos": "[名(専)]",
    "meaning": "松木站(电车站名)"
  },
  {
    "id": 469,
    "lesson": 18,
    "word": "目的",
    "reading": "もくてき",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "目标,目的"
  },
  {
    "id": 470,
    "lesson": 18,
    "word": "別に",
    "reading": "べつに",
    "pitch": "0",
    "pos": "[副]",
    "meaning": "特别,显著(后接否定);另外,除外"
  },
  {
    "id": 471,
    "lesson": 19,
    "word": "開く",
    "reading": "あく",
    "pitch": "0",
    "pos": "[自動1]",
    "meaning": "开, 打开, 关闭着的东西开了"
  },
  {
    "id": 472,
    "lesson": 19,
    "word": "たばこ",
    "reading": "たばこ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "香烟"
  },
  {
    "id": 473,
    "lesson": 19,
    "word": "消す",
    "reading": "けす",
    "pitch": "0",
    "pos": "[他動 1]",
    "meaning": "扑灭,熄灭;消除,抹去;关掉,切断(电源等)"
  },
  {
    "id": 474,
    "lesson": 19,
    "word": "水",
    "reading": "みず",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "水"
  },
  {
    "id": 475,
    "lesson": 19,
    "word": "止める",
    "reading": "とめる",
    "pitch": "0",
    "pos": "[他動 2]",
    "meaning": "停,止"
  },
  {
    "id": 476,
    "lesson": 19,
    "word": "玄関",
    "reading": "げんかん",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "门口, 正门, 大门"
  },
  {
    "id": 477,
    "lesson": 19,
    "word": "靴",
    "reading": "くつ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "鞋子"
  },
  {
    "id": 478,
    "lesson": 19,
    "word": "並べる",
    "reading": "ならべる",
    "pitch": "0",
    "pos": "[他動 2]",
    "meaning": "排列; 堆放"
  },
  {
    "id": 479,
    "lesson": 19,
    "word": "空",
    "reading": "そら",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "天空"
  },
  {
    "id": 480,
    "lesson": 19,
    "word": "暗い",
    "reading": "くらい",
    "pitch": "2",
    "pos": "[イ形]",
    "meaning": "暗的"
  },
  {
    "id": 481,
    "lesson": 19,
    "word": "なる",
    "reading": "なる",
    "pitch": "0",
    "pos": "[自動1]",
    "meaning": "成为,变成"
  },
  {
    "id": 482,
    "lesson": 19,
    "word": "鳥の巣",
    "reading": "とりのす",
    "pitch": "0",
    "pos": "[名(専)]",
    "meaning": "鸟巢(北京奥运场馆)"
  },
  {
    "id": 483,
    "lesson": 19,
    "word": "息子",
    "reading": "むすこ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "儿子, 男孩子"
  },
  {
    "id": 484,
    "lesson": 19,
    "word": "来年",
    "reading": "らいねん",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "明年"
  },
  {
    "id": 485,
    "lesson": 19,
    "word": "あと",
    "reading": "あと",
    "pitch": "1",
    "pos": "[名•副]",
    "meaning": "(从此时此地)以后"
  },
  {
    "id": 486,
    "lesson": 19,
    "word": "年賀状",
    "reading": "ねんがじょう",
    "pitch": "30",
    "pos": "[名]",
    "meaning": "贺年片"
  },
  {
    "id": 487,
    "lesson": 19,
    "word": "取引先",
    "reading": "とりひきさき",
    "pitch": "(",
    "pos": "[名]",
    "meaning": "往来厂商(店家、客户)"
  },
  {
    "id": 488,
    "lesson": 19,
    "word": "印象",
    "reading": "いんしょう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "印象"
  },
  {
    "id": 489,
    "lesson": 19,
    "word": "イラスト",
    "reading": "イラスト",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "插图, 插画(「イラストレーション(illustration)」的略语)"
  },
  {
    "id": 490,
    "lesson": 19,
    "word": "印刷",
    "reading": "いんさつ",
    "pitch": "0",
    "pos": "[名・他動 3]",
    "meaning": "印刷"
  },
  {
    "id": 491,
    "lesson": 19,
    "word": "年越しそば",
    "reading": "としこしそば",
    "pitch": "(5)",
    "pos": "[名]",
    "meaning": "迎新荞麦面"
  },
  {
    "id": 492,
    "lesson": 19,
    "word": "ねずみ",
    "reading": "ねずみ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "鼠, 耗子"
  },
  {
    "id": 493,
    "lesson": 19,
    "word": "おおみそか",
    "reading": "おおみそか",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "除夕, 大年三十"
  },
  {
    "id": 494,
    "lesson": 19,
    "word": "特別",
    "reading": "とくべつ",
    "pitch": "0",
    "pos": "[ナ形・副]",
    "meaning": "特别,特殊"
  },
  {
    "id": 495,
    "lesson": 19,
    "word": "ギョーザ",
    "reading": "ギョーザ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "饺子"
  },
  {
    "id": 496,
    "lesson": 19,
    "word": "魚",
    "reading": "さかな",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "鱼,鱼类"
  },
  {
    "id": 497,
    "lesson": 19,
    "word": "おかしい",
    "reading": "おかしい",
    "pitch": "3",
    "pos": "[イ形]",
    "meaning": "可笑的,滑稽的;奇怪的"
  },
  {
    "id": 498,
    "lesson": 19,
    "word": "紅白歌合戦",
    "reading": "こうはくうたがっせん",
    "pitch": "6",
    "pos": "[名]",
    "meaning": "红白歌会"
  },
  {
    "id": 499,
    "lesson": 19,
    "word": "過ごす",
    "reading": "すごす",
    "pitch": "2",
    "pos": "[他動 1]",
    "meaning": "度过,生活"
  },
  {
    "id": 500,
    "lesson": 19,
    "word": "除夜",
    "reading": "じょや",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "除夕"
  },
  {
    "id": 501,
    "lesson": 19,
    "word": "鐘",
    "reading": "かね",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "钟,钟声"
  },
  {
    "id": 502,
    "lesson": 19,
    "word": "神社",
    "reading": "じんじゃ",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "神社"
  },
  {
    "id": 503,
    "lesson": 19,
    "word": "初詣",
    "reading": "はつもうで",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "正月里到神社、寺院进行新年后 的首次参拜"
  },
  {
    "id": 504,
    "lesson": 19,
    "word": "日本風",
    "reading": "にほんふう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "日式,日本风情"
  },
  {
    "id": 505,
    "lesson": 20,
    "word": "0",
    "reading": "0",
    "pitch": "事れ(くれ)",
    "pos": "[名]",
    "meaning": "年终,年末,岁末"
  },
  {
    "id": 506,
    "lesson": 20,
    "word": "0",
    "reading": "0",
    "pitch": "買い物(かいもの)",
    "pos": "[名·他動 3]",
    "meaning": "购物, 买东西"
  },
  {
    "id": 507,
    "lesson": 20,
    "word": "0",
    "reading": "0",
    "pitch": "拒紙(かびん)",
    "pos": "[名]",
    "meaning": "花瓶"
  },
  {
    "id": 508,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "重す(さす)",
    "pos": "[他動 1]",
    "meaning": "插"
  },
  {
    "id": 509,
    "lesson": 20,
    "word": "① ①",
    "reading": "① ①",
    "pitch": "いちご",
    "pos": "[名]",
    "meaning": "草莓"
  },
  {
    "id": 510,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "ジャム (jam)",
    "pos": "[名]",
    "meaning": "果酱"
  },
  {
    "id": 511,
    "lesson": 20,
    "word": "0",
    "reading": "0",
    "pitch": "中縄(おきなわ)",
    "pos": "[名(専)]",
    "meaning": "冲绳(地名)"
  },
  {
    "id": 512,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "トワイ (Hawaii)",
    "pos": "[名(専)]",
    "meaning": "夏威夷(地名)"
  },
  {
    "id": 513,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "毎(うみ)",
    "pos": "[名]",
    "meaning": "海,海洋"
  },
  {
    "id": 514,
    "lesson": 20,
    "word": ". 0 [",
    "reading": ". 0 [",
    "pitch": "運動(うんどう)",
    "pos": "[名・自動3]",
    "meaning": "体育运动"
  },
  {
    "id": 515,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "ンヤワー(shower)",
    "pos": "[名]",
    "meaning": "淋浴; 淋浴器"
  },
  {
    "id": 516,
    "lesson": 20,
    "word": "0",
    "reading": "0",
    "pitch": "谷びる(あびる)",
    "pos": "[他動 2]",
    "meaning": "浇,淋,浴"
  },
  {
    "id": 517,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "ダンス (dance)",
    "pos": "[名]",
    "meaning": "舞蹈"
  },
  {
    "id": 518,
    "lesson": 20,
    "word": "2",
    "reading": "2",
    "pitch": "ドリンク (drink)",
    "pos": "[名]",
    "meaning": "饮料"
  },
  {
    "id": 519,
    "lesson": 20,
    "word": "① [",
    "reading": "① [",
    "pitch": "ダンス (dance)",
    "pos": "[名]",
    "meaning": "舞蹈"
  },
  {
    "id": 520,
    "lesson": 20,
    "word": "疲れる",
    "reading": "つかれる",
    "pitch": "3",
    "pos": "[自動2]",
    "meaning": "累,疲倦"
  },
  {
    "id": 521,
    "lesson": 20,
    "word": "眠い",
    "reading": "ねむい",
    "pitch": "02",
    "pos": "[イ形]",
    "meaning": "困的, 有睡意的"
  },
  {
    "id": 522,
    "lesson": 20,
    "word": "お替り",
    "reading": "おかわり",
    "pitch": "2",
    "pos": "[名・自動3]",
    "meaning": "再来一份,再来一碗"
  },
  {
    "id": 523,
    "lesson": 20,
    "word": "ちょうだい",
    "reading": "ちょうだい",
    "pitch": "3",
    "pos": "[名・他動 3]",
    "meaning": "领到, 收到, 受到"
  },
  {
    "id": 524,
    "lesson": 20,
    "word": "半分",
    "reading": "はんぶん",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "一半,半个"
  },
  {
    "id": 525,
    "lesson": 20,
    "word": "連休",
    "reading": "れんきゅう",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "连休,连续放假,连续休息"
  },
  {
    "id": 526,
    "lesson": 20,
    "word": "手伝い",
    "reading": "てつだい",
    "pitch": "2",
    "pos": "[名]",
    "meaning": "帮助,助手,帮工"
  },
  {
    "id": 527,
    "lesson": 20,
    "word": "ぼく",
    "reading": "ぼく",
    "pitch": "1",
    "pos": "[名]",
    "meaning": "我(男子的自称)"
  },
  {
    "id": 528,
    "lesson": 20,
    "word": "台所",
    "reading": "だいどころ",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "厨房"
  },
  {
    "id": 529,
    "lesson": 20,
    "word": "明治神宮",
    "reading": "めいじじんぐう",
    "pitch": "4",
    "pos": "[名(専)]",
    "meaning": "明治神宮(地名)"
  },
  {
    "id": 530,
    "lesson": 20,
    "word": "高尾山",
    "reading": "たかおさん",
    "pitch": "3",
    "pos": "[名(専)]",
    "meaning": "高尾山(地名)"
  },
  {
    "id": 531,
    "lesson": 20,
    "word": "初日の出",
    "reading": "はつひので",
    "pitch": "3",
    "pos": "[名]",
    "meaning": "元旦早晨的太阳"
  },
  {
    "id": 532,
    "lesson": 20,
    "word": "人出",
    "reading": "ひとで",
    "pitch": "0",
    "pos": "[名]",
    "meaning": "外出的人群"
  },
  {
    "id": 533,
    "lesson": 20,
    "word": "無事",
    "reading": "ぶじ",
    "pitch": "0",
    "pos": "[名・ナ形]",
    "meaning": "平安无事;身体健康;顺顺当当"
  }
];
