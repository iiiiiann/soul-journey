const questions = [
  {
    "question": "Q1：我是否經常懷疑自己存在的價值與意義？",
    "options": [
      {
        "text": "A. 這幾乎是我活著的核心思考",
        "type": "IDF"
      },
      {
        "text": "B. 有時靜下來會忍不住思考這件事",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾在某些時刻才會想起",
        "type": "TYN"
      },
      {
        "text": "D. 不曾真正想過這樣的問題",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q2：即使身邊很多人，我也常感到孤獨。",
    "options": [
      {
        "text": "A. 那種孤獨像常駐在我身上的影子",
        "type": "IDF"
      },
      {
        "text": "B. 我有時會感受到這樣的孤獨感",
        "type": "NSR"
      },
      {
        "text": "C. 我大多時候不覺得孤單",
        "type": "TYN"
      },
      {
        "text": "D. 我感覺自己在人群中很自在",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q3：我能清楚描述自己是誰。",
    "options": [
      {
        "text": "A. 是的，我對自己的輪廓非常清楚",
        "type": "IDF"
      },
      {
        "text": "B. 我大致知道自己的方向與特質",
        "type": "NSR"
      },
      {
        "text": "C. 有時我會不太確定自己的定位",
        "type": "TYN"
      },
      {
        "text": "D. 我常常搞不清楚自己到底是誰",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q4：我覺得世界看不見真正的我。",
    "options": [
      {
        "text": "A. 總覺得自己像被玻璃罩住一樣",
        "type": "IDF"
      },
      {
        "text": "B. 偶爾會有這種被誤解的感受",
        "type": "NSR"
      },
      {
        "text": "C. 大多數人應該理解我表達的樣子",
        "type": "TYN"
      },
      {
        "text": "D. 我不太有這樣的困擾",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q5：我會反覆回想自己說過或做過的事。",
    "options": [
      {
        "text": "A. 我常為過去的片段懊悔或反芻",
        "type": "IDF"
      },
      {
        "text": "B. 有時候我會重播腦海中的某些場景",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾才會浮現類似片段",
        "type": "TYN"
      },
      {
        "text": "D. 我幾乎不回頭看過去",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q6：當我望向鏡子時，偶爾會覺得陌生。",
    "options": [
      {
        "text": "A. 那種陌生感像看著另一個靈魂",
        "type": "IDF"
      },
      {
        "text": "B. 有時會閃現「這是我嗎」的念頭",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾感覺面孔與內在有落差",
        "type": "TYN"
      },
      {
        "text": "D. 我對自己的樣子非常熟悉",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q7：我相信人活著是為了追尋某種真理。",
    "options": [
      {
        "text": "A. 我覺得生命中最重要的就是這個追尋",
        "type": "IDF"
      },
      {
        "text": "B. 我傾向相信每個人都有自己的真理",
        "type": "NSR"
      },
      {
        "text": "C. 我對此感到模糊或中立",
        "type": "TYN"
      },
      {
        "text": "D. 我認為人活著並不需要這樣的目標",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q8：我的自我認同會隨時間或情境而改變。",
    "options": [
      {
        "text": "A. 我像變色龍，常依場域調整自己",
        "type": "IDF"
      },
      {
        "text": "B. 某些時候我會出現不同面貌",
        "type": "NSR"
      },
      {
        "text": "C. 雖然偶爾有變化，但核心沒什麼改變",
        "type": "TYN"
      },
      {
        "text": "D. 我一直以來都很一致",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q9：我曾懷疑自己是否活在一場夢中。",
    "options": [
      {
        "text": "A. 有時甚至分不清夢與現實",
        "type": "IDF"
      },
      {
        "text": "B. 曾經有過幾次強烈的懷疑",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾腦中會閃過這種念頭",
        "type": "TYN"
      },
      {
        "text": "D. 我從來沒這樣想過",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q10：我害怕成為一個普通、毫無特別之處的人。",
    "options": [
      {
        "text": "A. 我害怕被遺忘，成為無聲的塵埃",
        "type": "IDF"
      },
      {
        "text": "B. 我希望自己能有一點與眾不同",
        "type": "NSR"
      },
      {
        "text": "C. 我接受平凡，覺得也能過得好",
        "type": "TYN"
      },
      {
        "text": "D. 我並不在意自己是否特別",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q11：我經常思考「我是誰」這個問題。",
    "options": [
      {
        "text": "A. 幾乎每天，我都在尋找答案",
        "type": "IDF"
      },
      {
        "text": "B. 常常會在沉思中問自己這個問題",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾在特別時刻才會這樣問",
        "type": "TYN"
      },
      {
        "text": "D. 我從不太糾結這類哲學問題",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q12：我的情緒像海浪一樣變化劇烈。",
    "options": [
      {
        "text": "A. 我的情緒常失控，像潮汐一樣忽上忽下",
        "type": "IDF"
      },
      {
        "text": "B. 我能感受到情緒波動，但大多能調節",
        "type": "NSR"
      },
      {
        "text": "C. 我情緒穩定，很少起伏太大",
        "type": "TYN"
      },
      {
        "text": "D. 我通常不太被情緒影響",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q13：當我愛上一個人，我會深陷其中難以抽身。",
    "options": [
      {
        "text": "A. 我會全心投入，甚至失去自我",
        "type": "IDF"
      },
      {
        "text": "B. 我會深愛對方，但保有一點距離",
        "type": "NSR"
      },
      {
        "text": "C. 我對愛情保持理性與觀察",
        "type": "TYN"
      },
      {
        "text": "D. 我很難對人產生這麼深的感情",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q14：我渴望一種能完全被理解與包容的關係。",
    "options": [
      {
        "text": "A. 我一直在等待那個能懂我靈魂的人",
        "type": "IDF"
      },
      {
        "text": "B. 我希望被理解，但不奢望完全契合",
        "type": "NSR"
      },
      {
        "text": "C. 我知道理解是有限的，選擇放低期待",
        "type": "TYN"
      },
      {
        "text": "D. 我不覺得被理解是愛情的重點",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q15：分離對我來說比死亡還痛苦。",
    "options": [
      {
        "text": "A. 每一次離別都像撕裂自己",
        "type": "IDF"
      },
      {
        "text": "B. 離別讓我心碎，但我學會了接受",
        "type": "NSR"
      },
      {
        "text": "C. 我對分離有情緒，但可以處理",
        "type": "TYN"
      },
      {
        "text": "D. 分離對我而言只是人生常態",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q16：我喜歡照顧別人的情緒，即使犧牲自己。",
    "options": [
      {
        "text": "A. 我常不自覺把別人放在自己前面",
        "type": "IDF"
      },
      {
        "text": "B. 如果對方重要，我願意為他承擔",
        "type": "NSR"
      },
      {
        "text": "C. 我會盡力陪伴，但不會壓抑自己",
        "type": "TYN"
      },
      {
        "text": "D. 我更傾向先顧好自己",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q17：我經常因為感受到他人的情緒而心煩。",
    "options": [
      {
        "text": "A. 他人的情緒很容易吞噬我",
        "type": "IDF"
      },
      {
        "text": "B. 我會被影響，但能意識到不是我自己",
        "type": "NSR"
      },
      {
        "text": "C. 我能與他人保持感受距離",
        "type": "TYN"
      },
      {
        "text": "D. 我通常不會受他人情緒左右",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q18：我傾向於在關係中迷失自我。",
    "options": [
      {
        "text": "A. 一旦深愛，我幾乎忘了自己的存在",
        "type": "IDF"
      },
      {
        "text": "B. 我有時會變得過度迎合",
        "type": "NSR"
      },
      {
        "text": "C. 我努力在愛中保持平衡",
        "type": "TYN"
      },
      {
        "text": "D. 我的自我在關係中不會動搖",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q19：即使被傷害，我也會想為對方找藉口。",
    "options": [
      {
        "text": "A. 我總會設法理解對方的傷害",
        "type": "IDF"
      },
      {
        "text": "B. 我可能會原諒，但會保持距離",
        "type": "NSR"
      },
      {
        "text": "C. 我會分辨愛與傷害的界線",
        "type": "TYN"
      },
      {
        "text": "D. 傷害就是傷害，我不會再為對方辯解",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q20：我曾為了一段情感而放棄自我。",
    "options": [
      {
        "text": "A. 那段愛幾乎把我變成另一個人",
        "type": "IDF"
      },
      {
        "text": "B. 我為對方妥協過很多，但後來醒悟",
        "type": "NSR"
      },
      {
        "text": "C. 我曾經改變一點，但保有本質",
        "type": "TYN"
      },
      {
        "text": "D. 我不希望被依賴，我更重視自我自由",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q21：被需要讓我覺得自己有價值。",
    "options": [
      {
        "text": "A.當別人依賴我，我才覺得活著有意義",
        "type": "IDF"
      },
      {
        "text": "B. 我喜歡被需要，但不想成為負擔",
        "type": "NSR"
      },
      {
        "text": "C. 我可以被需要，但這不是我的價值來源",
        "type": "TYN"
      },
      {
        "text": "D. 我不希望被依賴，我更重視自我自由",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q22：我常常把別人的快樂看得比自己的更重要。",
    "options": [
      {
        "text": "A. 別人開心，我才安心",
        "type": "IDF"
      },
      {
        "text": "B. 我會為別人著想，哪怕稍微委屈自己",
        "type": "NSR"
      },
      {
        "text": "C. 我盡量平衡自己與他人的需求",
        "type": "TYN"
      },
      {
        "text": "D. 我不會犧牲自己去成全別人",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q23：我經常思考宇宙的起源與生命的意義。",
    "options": [
      {
        "text": "A. 這是我最常進入的深層思維領域",
        "type": "IDF"
      },
      {
        "text": "B. 有時我會陷入這樣的哲學想像",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾想到，卻不太深入",
        "type": "TYN"
      },
      {
        "text": "D. 這類問題對我來說有點遙遠",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q24：我相信萬物之間有某種深層連結。",
    "options": [
      {
        "text": "A. 我能感受到一種難以言喻的整體共振",
        "type": "IDF"
      },
      {
        "text": "B. 我相信某種看不見的聯繫存在",
        "type": "NSR"
      },
      {
        "text": "C. 這種連結也許有，但我不常去想",
        "type": "TYN"
      },
      {
        "text": "D. 我認為萬物各自獨立，沒有必然關聯",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q25：我覺得自己的存在只是宇宙中的一粒塵埃。",
    "options": [
      {
        "text": "A. 我常感覺自己渺小卻神聖",
        "type": "IDF"
      },
      {
        "text": "B. 我偶爾會被這種渺小感震撼",
        "type": "NSR"
      },
      {
        "text": "C. 我理解這個比喻，但不太有感覺",
        "type": "TYN"
      },
      {
        "text": "D. 我從不覺得自己渺小",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q26：當我仰望星空，會感到一種超越自我的平靜。",
    "options": [
      {
        "text": "A. 那是一種接近靈魂源頭的寧靜",
        "type": "IDF"
      },
      {
        "text": "B. 星空讓我暫時忘記塵世煩憂",
        "type": "NSR"
      },
      {
        "text": "C. 我覺得美，但不會太有感觸",
        "type": "TYN"
      },
      {
        "text": "D.我很少主動凝視星空",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q27：我曾夢見過不是地球的地方。",
    "options": [
      {
        "text": "A. 我清楚記得那些來自異界的場景",
        "type": "IDF"
      },
      {
        "text": "B. 有些夢讓我懷疑我來自別處",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾夢到模糊的陌生世界",
        "type": "TYN"
      },
      {
        "text": "D. 我的夢境多半寫實，沒有這類情節",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q28：我覺得自己與這個世界格格不入。",
    "options": [
      {
        "text": "A. 我總覺得自己像個異鄉靈魂",
        "type": "IDF"
      },
      {
        "text": "B. 我有時會感到格格不入",
        "type": "NSR"
      },
      {
        "text": "C. 雖然偶爾不適，但我能調適",
        "type": "TYN"
      },
      {
        "text": "D. 我覺得我屬於這個世界",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q29：我相信每個人都帶著某種使命而來。",
    "options": [
      {
        "text": "A. 我的生命一直有種被召喚的感覺",
        "type": "IDF"
      },
      {
        "text": "B. 我相信使命存在，只是還沒被看見",
        "type": "NSR"
      },
      {
        "text": "C. 我不太確定使命是否存在",
        "type": "TYN"
      },
      {
        "text": "D. 我認為人是隨機誕生，沒有特定任務",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q30：死亡對我來說不一定是結束，而可能是轉化。",
    "options": [
      {
        "text": "A. 我認為死亡是靈魂的另一段旅程",
        "type": "IDF"
      },
      {
        "text": "B. 死亡可能是一種過渡或回歸",
        "type": "NSR"
      },
      {
        "text": "C. 我不確定，但我對死亡保持開放",
        "type": "TYN"
      },
      {
        "text": "D. 死亡在我看來就是終點",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q31：我喜歡獨自走進自然或荒野，彷彿與宇宙對話。",
    "options": [
      {
        "text": "A. 在荒野中我能聽見內在與宇宙的聲音",
        "type": "IDF"
      },
      {
        "text": "B. 我喜歡一個人與自然靜靜相處",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾接觸自然，覺得放鬆但不深沉",
        "type": "TYN"
      },
      {
        "text": "D. 我比較習慣城市與人群的節奏",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q32：我經常有種「我並不屬於這裡」的感覺。",
    "options": [
      {
        "text": "A. 我覺得我是從另一個世界來的",
        "type": "IDF"
      },
      {
        "text": "B. 我常有漂浮感，好像不屬於這個維度",
        "type": "NSR"
      },
      {
        "text": "C. 有時覺得自己與環境有點脫節",
        "type": "TYN"
      },
      {
        "text": "D. 我沒有這種感覺，我很接地",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q33：有時我感覺自己像是從另一個維度來的。",
    "options": [
      {
        "text": "A. 我甚至懷疑我真實的起源不在人間",
        "type": "IDF"
      },
      {
        "text": "B. 那種陌生與穿越感，時常出現在我心中",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾想像這樣的可能，但不太當真",
        "type": "TYN"
      },
      {
        "text": "D. 我從不懷疑自己的現實根源",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q34：我經常腦中有大量想法與靈感冒出來。",
    "options": [
      {
        "text": "A. 靈感像洪水一樣湧現，我幾乎來不及記錄",
        "type": "IDF"
      },
      {
        "text": "B. 我常常會有新想法，但需要整理後才行動",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾才會靈光一閃，大多靠努力累積",
        "type": "TYN"
      },
      {
        "text": "D. 我的思維偏向實用，很少出現靈感爆發",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q35：完美主義讓我很難真正開始或完成事情。",
    "options": [
      {
        "text": "A.我常因太要求完美而停滯不前",
        "type": "IDF"
      },
      {
        "text": "B. 我會拖延，但最終仍會逼自己完成",
        "type": "NSR"
      },
      {
        "text": "C. 我能接受不完美，並向前推進",
        "type": "TYN"
      },
      {
        "text": "D. 我不太會被完美主義困住",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q36：我偏好隨性創造而不是照規則行事。",
    "options": [
      {
        "text": "A. 我一向反骨，創造要有自己的味道",
        "type": "IDF"
      },
      {
        "text": "B. 我喜歡有結構的自由，不全隨性也不守規",
        "type": "NSR"
      },
      {
        "text": "C. 我傾向遵循已有的方法，但會微調",
        "type": "TYN"
      },
      {
        "text": "D. 我覺得照規則做事比較安心可靠",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q37：我對重複的日常生活感到窒息。",
    "options": [
      {
        "text": "A. 日復一日的日常會讓我感到靈魂枯竭",
        "type": "IDF"
      },
      {
        "text": "B. 我需要在日常中找到變化與刺激",
        "type": "NSR"
      },
      {
        "text": "C. 我可以適應日常，只要偶爾有喘息空間",
        "type": "TYN"
      },
      {
        "text": "D. 我習慣規律生活，重複反而帶來穩定感",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q38：我的創作常帶有一種情感或靈性的重量。",
    "options": [
      {
        "text": "A. 我創作時像是在挖掘靈魂深處的秘密",
        "type": "IDF"
      },
      {
        "text": "B. 我的創作常蘊含情感與內在經驗",
        "type": "NSR"
      },
      {
        "text": "C. 我創作偏理性或概念化，不太情感導向",
        "type": "TYN"
      },
      {
        "text": "D. 我不太從事創作",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q39：我覺得創作是我理解世界的方式。",
    "options": [
      {
        "text": "A. 我透過創作才能真正與自己與世界對話",
        "type": "IDF"
      },
      {
        "text": "B. 創作幫助我釐清感受與想法",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾創作，但主要靠邏輯理解世界",
        "type": "TYN"
      },
      {
        "text": "D. 我不是以創作為主要理解方式",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q40：我很容易對某件事突然充滿熱情，然後迅速熄火。",
    "options": [
      {
        "text": "A. 我的熱情來得猛烈去得也快",
        "type": "IDF"
      },
      {
        "text": "B. 我常有高峰期，也會有冷卻期",
        "type": "NSR"
      },
      {
        "text": "C. 我通常穩定持續，不太大起大落",
        "type": "TYN"
      },
      {
        "text": "D. 我比較少產生這種突如其來的熱情",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q41：我有強烈的表達慾望。",
    "options": [
      {
        "text": "A. 我有太多話要說、太多東西想傳達",
        "type": "IDF"
      },
      {
        "text": "B. 我會挑選適當時機表達，但內在很豐富",
        "type": "NSR"
      },
      {
        "text": "C. 我的表達需求不高，偏好內斂",
        "type": "TYN"
      },
      {
        "text": "D. 我多半沉默，對外表達沒什麼慾望",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q42：即使沒有人懂，我也想做出屬於自己的作品。",
    "options": [
      {
        "text": "A. 我創作是為了回應靈魂，而不是討好誰",
        "type": "IDF"
      },
      {
        "text": "B. 能被理解很好，但不影響我創作的動力",
        "type": "NSR"
      },
      {
        "text": "C. 若無共鳴我會質疑是否值得創作",
        "type": "TYN"
      },
      {
        "text": "D. 我很少有這樣的創作衝動",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q43：我會為了靈感犧牲睡眠、吃飯等生活節奏。",
    "options": [
      {
        "text": "A. 當靈感來時我可以廢寢忘食",
        "type": "IDF"
      },
      {
        "text": "B. 若靈感夠強烈，我願意為它讓路",
        "type": "NSR"
      },
      {
        "text": "C. 我會規劃創作時間，不讓生活失衡",
        "type": "TYN"
      },
      {
        "text": "D. 我的生活節奏比較穩定，不受靈感牽動",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q44：作品完成後，我會感到一種短暫的空虛。",
    "options": [
      {
        "text": "A. 就像靈魂被抽離，完成反而讓我失落想",
        "type": "IDF"
      },
      {
        "text": "B. 成就與空虛總是同時出現",
        "type": "NSR"
      },
      {
        "text": "C. 完成讓我滿足，很少感到空虛",
        "type": "TYN"
      },
      {
        "text": "D. 我沒有這種感覺，創作只是過程之一",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q45：我有時會出現極端的想法或情緒。",
    "options": [
      {
        "text": "A. 它們來得突然，像雷擊穿我的腦海",
        "type": "IDF"
      },
      {
        "text": "B. 有些念頭我會壓抑，但知道它們存在",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾有強烈反應，但還算能控制",
        "type": "TYN"
      },
      {
        "text": "D. 我的情緒與思維大多平穩",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q46：我不喜歡自己某些部分，但又無法改變。",
    "options": [
      {
        "text": "A. 我內心有黑洞，我與它共存",
        "type": "IDF"
      },
      {
        "text": "B. 我知道那部分存在，也在學習擁抱它",
        "type": "NSR"
      },
      {
        "text": "C. 有些特質我希望改善，也正在努力",
        "type": "TYN"
      },
      {
        "text": "D. 我對自己大致滿意，沒有太強烈的否定感",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q47：我害怕別人看到我真實的樣子。",
    "options": [
      {
        "text": "A. 我的真實太怪異，我怕被拒絕",
        "type": "IDF"
      },
      {
        "text": "B. 我選擇性揭露自己，怕太坦白會受傷",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾擔心評價，但還是願意展露部分真我",
        "type": "TYN"
      },
      {
        "text": "D. 我很自在地做自己，不怕別人眼光",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q48：有時我覺得內心住著另一個我。",
    "options": [
      {
        "text": "A. 那個「我」像影子般潛伏，時而現身",
        "type": "IDF"
      },
      {
        "text": "B. 我能感覺到內在的分裂與衝突",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾覺得自己在不同情境下像變了人",
        "type": "TYN"
      },
      {
        "text": "D. 我的內在蠻一致的，不曾這樣想",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q49：我的內在常有拉扯與矛盾。",
    "options": [
      {
        "text": "A. 我像活在內部戰爭，每天都在對抗自己",
        "type": "IDF"
      },
      {
        "text": "B. 我常為選擇或情感拉扯，難以決定",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾會矛盾，但能找到平衡",
        "type": "TYN"
      },
      {
        "text": "D. 我內心算穩定，很少有劇烈衝突",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q50：我曾想過徹底離開或消失。",
    "options": [
      {
        "text": "A. 不只是想過，我曾真心準備過",
        "type": "IDF"
      },
      {
        "text": "B. 有幾次那念頭像濃霧籠罩心頭",
        "type": "NSR"
      },
      {
        "text": "C. 想過一閃而過，但不曾認真看待",
        "type": "TYN"
      },
      {
        "text": "D. 我從沒這樣想過",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q51：我感受到自己的黑暗面，甚至有些欣賞它。",
    "options": [
      {
        "text": "A. 黑暗讓我真實，我不再逃避它",
        "type": "IDF"
      },
      {
        "text": "B. 我與黑暗共舞，也學會不被它吞噬",
        "type": "NSR"
      },
      {
        "text": "C. 我知道自己有陰影，但保持距離",
        "type": "TYN"
      },
      {
        "text": "D. 我不太理解自己有什麼「黑暗面」",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q52：我的夢境常帶有壓迫感或強烈象徵意涵。",
    "options": [
      {
        "text": "A. 我的夢像深層預言或潛意識劇場",
        "type": "IDF"
      },
      {
        "text": "B. 有些夢讓我驚醒，久久無法忘記",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾會作夢，但不太有象徵性的內容",
        "type": "TYN"
      },
      {
        "text": "D. 我很少作夢，或記不起來",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q53：我無法完全信任自己。",
    "options": [
      {
        "text": "A. 有些時候，我甚至覺得自己是危險的",
        "type": "IDF"
      },
      {
        "text": "B. 我懷疑過自己的判斷與選擇",
        "type": "NSR"
      },
      {
        "text": "C. 我曾經動搖，但大致相信自己",
        "type": "TYN"
      },
      {
        "text": "D. 我信任自己的直覺與行為",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q54：我經常懷疑自己是否正在失控。",
    "options": [
      {
        "text": "A. 我感覺理性與瘋狂的邊界越來越模糊",
        "type": "IDF"
      },
      {
        "text": "B. 有時我怕自己一念之差會做出可怕的事",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾會懷疑，但能重新穩住狀態",
        "type": "TYN"
      },
      {
        "text": "D. 從沒感覺自己會失控",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q55：有時我害怕自己會做出瘋狂的事。",
    "options": [
      {
        "text": "A. 那些衝動像野獸，潛藏在我體內",
        "type": "IDF"
      },
      {
        "text": "B. 我不確定極限在哪，但我有點好奇",
        "type": "NSR"
      },
      {
        "text": "C. 我知道怎麼收住自己，即使感覺到邊緣",
        "type": "TYN"
      },
      {
        "text": "D. 我的行為一直很理性與克制",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q56：我常扮演一個「正常」的樣子以融入社會。",
    "options": [
      {
        "text": "A. 我像演員，在每個場景切換不同人格",
        "type": "IDF"
      },
      {
        "text": "B. 為了不被排斥，我會隱藏部分真實",
        "type": "NSR"
      },
      {
        "text": "C. 我會微調自己，但不至於完全扮演",
        "type": "TYN"
      },
      {
        "text": "D.我不太會改變自己來迎合社會",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q57：我在大眾場合會戴上不同面具。",
    "options": [
      {
        "text": "A. 每一張面具都代表一種生存方式",
        "type": "IDF"
      },
      {
        "text": "B. 我會根據場合切換表達方式",
        "type": "NSR"
      },
      {
        "text": "C. 雖然會有所保留，但大致表裡一致",
        "type": "TYN"
      },
      {
        "text": "D. 我不喜歡裝出不是自己的樣子",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q58：我在群體中經常感到格格不入。",
    "options": [
      {
        "text": "A. 我像靈魂漂浮在眾人之上",
        "type": "IDF"
      },
      {
        "text": "B. 我常覺得與人有種隔閡與斷線感",
        "type": "NSR"
      },
      {
        "text": "C. 有時不合群，但能找到適應方式",
        "type": "TYN"
      },
      {
        "text": "D. 我在群體中能自在地融入",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q59：雖然我可以社交，但內心其實很疲憊。",
    "options": [
      {
        "text": "A. 每次社交像耗盡能量的戰役",
        "type": "IDF"
      },
      {
        "text": "B. 我可以社交，但需要大量時間恢復",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾會感到疲憊，但不嚴重",
        "type": "TYN"
      },
      {
        "text": "D. 社交對我來說是自然的流動",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q60：我不擅長應付小型談話與社交場合。",
    "options": [
      {
        "text": "A. 那些場合讓我如坐針氈，想逃離",
        "type": "IDF"
      },
      {
        "text": "B. 我會刻意準備對話，但感覺不自然",
        "type": "NSR"
      },
      {
        "text": "C. 雖然不愛寒暄，但我能應對得體",
        "type": "TYN"
      },
      {
        "text": "D. 我在社交場合通常很放鬆自如",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q61：我經常壓抑真實的自己以維持和平。",
    "options": [
      {
        "text": "A. 我總是在隱忍，為了不引發衝突",
        "type": "IDF"
      },
      {
        "text": "B. 我有時會妥協，但心裡留下痕跡",
        "type": "NSR"
      },
      {
        "text": "C. 我嘗試用柔軟的方式說出真實",
        "type": "TYN"
      },
      {
        "text": "D. 我很少壓抑自己，習慣直接表達",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q62：我認為社會期待與我真實的樣子有落差。",
    "options": [
      {
        "text": "A. 那些期待像鐵網困住我的靈魂",
        "type": "IDF"
      },
      {
        "text": "B. 我感受到壓力，也努力找到縫隙",
        "type": "NSR"
      },
      {
        "text": "C. 雖然有落差，但我懂得調整步伐",
        "type": "TYN"
      },
      {
        "text": "D. 我覺得社會與我之間並不衝突",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q63：我有時無法理解人際間的潛規則。",
    "options": [
      {
        "text": "A. 那些隱性規則像黑話，我怎麼都學不會",
        "type": "IDF"
      },
      {
        "text": "B. 我懂一些，但常搞不清界線在哪",
        "type": "NSR"
      },
      {
        "text": "C. 雖然不懂全部，但我觀察力夠應付",
        "type": "TYN"
      },
      {
        "text": "D. 我很擅長讀懂人際間的運作機制",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q64：我曾假裝自己比實際更積極或快樂。",
    "options": [
      {
        "text": "A. 我擅長偽裝，甚至騙過自己",
        "type": "IDF"
      },
      {
        "text": "B. 為了讓別人安心，我會強顏歡笑",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾會「演一下」，但不常發生",
        "type": "TYN"
      },
      {
        "text": "D. 我不會假裝情緒，難過就是難過",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q65：我不太喜歡權威或被管束的感覺。",
    "options": [
      {
        "text": "A. 我本能地抗拒所有命令與控制",
        "type": "IDF"
      },
      {
        "text": "B. 我討厭不合理的規則，但可接受指引",
        "type": "NSR"
      },
      {
        "text": "C. 若制度合理，我可以配合",
        "type": "TYN"
      },
      {
        "text": "D. 我對權威沒有太大抗拒",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q66：我覺得這個世界有點像舞台，每個人都在演戲。",
    "options": [
      {
        "text": "A. 這是一場戲，只是角色不同而已",
        "type": "IDF"
      },
      {
        "text": "B. 有些場合真的像表演，但我選擇觀察",
        "type": "NSR"
      },
      {
        "text": "C. 我懂這種比喻，但生活中還是有真誠",
        "type": "TYN"
      },
      {
        "text": "D. 我不太這樣看待世界，我相信人是真實的",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q67：我經常沉浸在過去的回憶中。",
    "options": [
      {
        "text": "A. 我常活在回憶裡，彷彿時間停留在過去",
        "type": "IDF"
      },
      {
        "text": "B. 某些回憶總在特定時刻湧上心頭",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾想起過去，但不會被牽著走",
        "type": "TYN"
      },
      {
        "text": "D. 我的重心多半在現在或未來",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q68：我的夢與現實有時會交錯難辨。",
    "options": [
      {
        "text": "A. 有些夢太真實，以至於我無法區分",
        "type": "IDF"
      },
      {
        "text": "B. 我常記得夢的細節，與現實感交織",
        "type": "NSR"
      },
      {
        "text": "C. 我有時夢境鮮明，但醒來能抽離",
        "type": "TYN"
      },
      {
        "text": "D. 我的夢多半模糊，醒來後就忘了",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q69：我懷念過去某段時光的感覺超過懷念人。",
    "options": [
      {
        "text": "A. 是那段氣味、光影、溫度讓我難以忘懷",
        "type": "IDF"
      },
      {
        "text": "B. 我懷念的是當時的自己與心境",
        "type": "NSR"
      },
      {
        "text": "C. 我會記得人與情節，但不特別懷舊",
        "type": "TYN"
      },
      {
        "text": "D. 過去對我而言已經翻篇",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q70：我對時間流逝感到難以接受。",
    "options": [
      {
        "text": "A. 我總覺得時間奪走了我所愛的一切",
        "type": "IDF"
      },
      {
        "text": "B. 我會感傷，但學著放下時間的推移",
        "type": "NSR"
      },
      {
        "text": "C. 我接受時間的變化，它是自然法則",
        "type": "TYN"
      },
      {
        "text": "D. 時間的過去對我來說不是什麼困擾",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q71：有些場景或聲音會強烈喚起記憶與情緒。",
    "options": [
      {
        "text": "A. 一首旋律、一道光線都可能引爆記憶",
        "type": "IDF"
      },
      {
        "text": "B. 我經常被觸景傷情而出神",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾會被喚起情感，但很快抽離",
        "type": "TYN"
      },
      {
        "text": "D. 我對這類刺激反應不大",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q72：我覺得某些記憶比現實更真實。",
    "options": [
      {
        "text": "A. 記憶彷彿更立體、更深刻，勝過當下",
        "type": "IDF"
      },
      {
        "text": "B. 有些片段深植我心，比現在更鮮明",
        "type": "NSR"
      },
      {
        "text": "C. 我能分辨記憶與現實的層次",
        "type": "TYN"
      },
      {
        "text": "D. 對我來說，現實才是最真實的感受",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q73：我懷疑有些記憶其實不是自己親身經歷的。",
    "options": [
      {
        "text": "A. 我記得的東西像是來自別人的人生",
        "type": "IDF"
      },
      {
        "text": "B. 有些記憶模糊得像虛構，但我卻確信它存在",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾有這種疑惑，但不常發生",
        "type": "TYN"
      },
      {
        "text": "D. 我的記憶大致清楚，沒有這種感覺",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q74：我的時間感經常斷裂或模糊。",
    "options": [
      {
        "text": "A. 有時我會突然失去時間感，像跳過一段人生",
        "type": "IDF"
      },
      {
        "text": "B. 時間對我來說常常不是線性的",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾時間感混亂，但還能回到節奏",
        "type": "TYN"
      },
      {
        "text": "D. 我的時間感穩定明確",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q75：我覺得自己一直活在「還沒開始的未來」。",
    "options": [
      {
        "text": "A. 我像在等某個命運的召喚，還沒真正啟程",
        "type": "IDF"
      },
      {
        "text": "B. 我感覺人生尚未展開真正的篇章",
        "type": "NSR"
      },
      {
        "text": "C. 我過著當下的日子，但偶爾有這種感覺",
        "type": "TYN"
      },
      {
        "text": "D. 我不覺得未來比現在更關鍵",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q76：即使過了多年，有些事我依然記得清清楚楚。",
    "options": [
      {
        "text": "A. 有些畫面如同昨天，永遠烙印在我心上",
        "type": "IDF"
      },
      {
        "text": "B. 特定事件我記得非常清楚",
        "type": "NSR"
      },
      {
        "text": "C. 大部分事情會慢慢淡化，但留下一點印象",
        "type": "TYN"
      },
      {
        "text": "D. 我對過去沒有太強記憶力",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q77：我曾覺得自己彷彿在活第二次人生。",
    "options": [
      {
        "text": "A. 一切都像曾經歷過，這人生只是重播",
        "type": "IDF"
      },
      {
        "text": "B. 有種既視感與命運感讓我懷疑人生的真實性",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾有過這樣的感覺，但我沒放在心上",
        "type": "TYN"
      },
      {
        "text": "D. 我從沒這種感覺，人生對我來說就是線性",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q78：我曾有過「一瞬間完全清醒」的體驗。",
    "options": [
      {
        "text": "A. 那一刻像靈魂閃電，照亮整個存在",
        "type": "IDF"
      },
      {
        "text": "B. 我曾短暫體會到極度清明的狀態",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾有過深刻直覺，但稍縱即逝",
        "type": "TYN"
      },
      {
        "text": "D. 我從未有過這種體驗",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q79：我覺得自己正在經歷某種轉化或覺醒。",
    "options": [
      {
        "text": "A. 我能感受到整個人正在重構與覺醒",
        "type": "IDF"
      },
      {
        "text": "B. 我正在某種變化過程中，雖然不穩定",
        "type": "NSR"
      },
      {
        "text": "C. 我覺得有改變發生，但不清楚是什麼",
        "type": "TYN"
      },
      {
        "text": "D. 我目前沒有這樣的感受",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q80：我能感受到自己靈魂的重量。",
    "options": [
      {
        "text": "A. 有時它重得讓我喘不過氣來，也真實得令人敬畏",
        "type": "IDF"
      },
      {
        "text": "B. 我常感覺內在有一個深不可測的核心",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾覺得自己「不是只有肉體」",
        "type": "TYN"
      },
      {
        "text": "D. 我對靈魂沒有具體感受",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q81：我曾在靜默中聽見某種內在召喚。",
    "options": [
      {
        "text": "A. 那聲音清晰而古老，像來自靈魂深處",
        "type": "IDF"
      },
      {
        "text": "B. 有時沉靜時會浮現某種訊息或方向感",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾有內心的直覺，但我不確定那是什麼",
        "type": "TYN"
      },
      {
        "text": "D. 我從未有過那種被召喚的感覺",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q82：我的某些選擇不是理性而是直覺驅動的。",
    "options": [
      {
        "text": "A. 我的靈魂知道該去哪裡，即使我不理解",
        "type": "IDF"
      },
      {
        "text": "B. 我常跟隨內在的「感覺」行動",
        "type": "NSR"
      },
      {
        "text": "C. 我會在直覺與理性之間取得平衡",
        "type": "TYN"
      },
      {
        "text": "D. 我多半依據邏輯與計劃做選擇",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q83：當我誠實表達自己時，會感到一種解放。",
    "options": [
      {
        "text": "A. 那像靈魂破繭而出，渾身顫動",
        "type": "IDF"
      },
      {
        "text": "B. 每次說真話，都像回家一樣自在",
        "type": "NSR"
      },
      {
        "text": "C. 表達後會鬆一口氣，但也有點不安",
        "type": "TYN"
      },
      {
        "text": "D. 我不覺得表達會帶來特別的情感轉變",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q84：我覺得有些事不是「想出來」的，而是「記起來」的。",
    "options": [
      {
        "text": "A. 那些真理像從靈魂深處喚回的記憶",
        "type": "IDF"
      },
      {
        "text": "B. 我常有種「本來就知道」的感覺",
        "type": "NSR"
      },
      {
        "text": "C. 有時直覺出現，感覺像啟示",
        "type": "TYN"
      },
      {
        "text": "D. 對我來說，知識都是經由學習建構的",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q85：我覺得人生中有些事件是冥冥中註定的。",
    "options": [
      {
        "text": "A. 我感受到命運像織網，我只是其上的節點",
        "type": "IDF"
      },
      {
        "text": "B. 某些相遇與轉折讓我無法否認命運的存在",
        "type": "NSR"
      },
      {
        "text": "C. 我相信偶然與選擇交織了我的人生",
        "type": "TYN"
      },
      {
        "text": "D. 我覺得一切都是機率與決策的結果",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q86：有時我會突然對生命有極深的感動與敬畏。",
    "options": [
      {
        "text": "A. 那感覺像被整個宇宙擁抱，又渺小又莊嚴",
        "type": "IDF"
      },
      {
        "text": "B. 在某些時刻，我能感受到生命的神聖",
        "type": "NSR"
      },
      {
        "text": "C. 我偶爾會對生命感到動容，但持續不久",
        "type": "TYN"
      },
      {
        "text": "D. 我對生命沒有特別的敬畏或感動經驗",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q87：我的身體會對某些能量或場域特別敏感。",
    "options": [
      {
        "text": "A. 我能清楚感覺到空間、人的情緒或氣場變化",
        "type": "IDF"
      },
      {
        "text": "B. 有些地方或人讓我不適，而我說不出原因",
        "type": "NSR"
      },
      {
        "text": "C. 偶爾會有些敏感，但我無法判斷準確性",
        "type": "TYN"
      },
      {
        "text": "D. 我沒注意過這種現象，或幾乎不受影響",
        "type": "GXV"
      }
    ]
  },
  {
    "question": "Q88：我能看見自己的靈魂，它如此真實而熾熱，但我害怕這世界沒人看見我燃燒的樣子。",
    "options": [
      {
        "text": "A. 那種被看不見的痛比孤獨還深，我每天都在燃燒",
        "type": "IDF"
      },
      {
        "text": "B. 我感受到自己靈魂的強烈渴望與孤獨",
        "type": "NSR"
      },
      {
        "text": "C. 有時我想展露真我，但又怕無人理解",
        "type": "TYN"
      },
      {
        "text": "D. 我還不確定靈魂是否真實存在於我之中",
        "type": "GXV"
      }
    ]
  }
];


function updateProgressBar() {
  const percent = ((current + 1) / questions.length) * 100;
  const fill = document.getElementById("progress-fill");
  if (fill) fill.style.width = percent + "%";
}

let current = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const backBtn = document.getElementById("backBtn");

function renderQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsEl.appendChild(btn);
  });
  progressEl.innerText = `第 ${current + 1} / ${questions.length} 題`;
  backBtn.style.display = current > 0 ? "inline-block" : "none";
}

function selectOption(type) {
  answers[current] = type;
  current++;
  if (current >= questions.length) {
    finishQuiz();
  } else {
      updateProgressBar();
renderQuestion();
  }
}

function goBack() {
  if (current > 0) {
    current--;
      updateProgressBar();
renderQuestion();
  }
}

function finishQuiz() {
  const result = {};
  for (const type of answers) {
    result[type] = (result[type] || 0) + 1;
  }
  const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
  const topType = sorted[0][0];
  window.location.href = `results/${topType}.html`;
}

  updateProgressBar();
renderQuestion();
