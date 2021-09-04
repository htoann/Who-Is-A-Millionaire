function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export const data = [
  {
    id: 1,
    question:
      "Real Madrid  là một câu lạc bộ bóng đá chuyên nghiệp của Tây Ban Nha có trụ sở tại",
    answers: shuffle([
      {
        text: "Marid",
        correct: true,
      },
      {
        text: "Marib",
        correct: false,
      },
      {
        text: "Argentina",
        correct: false,
      },
      {
        text: "Hà Nội",
        correct: false,
      },
    ]),
  },
  {
    id: 2,
    question: "2 họng súng xuất sắc nhất Real trong 10 năm qua là",
    answers: shuffle([
      {
        text: "Ronaldo và Benzema",
        correct: true,
      },
      {
        text: "Ronaldo và Figo",
        correct: false,
      },
      {
        text: "Ronaldo và Messi",
        correct: false,
      },
      {
        text: "Ronaldinho và Benzema",
        correct: false,
      },
    ]),
  },
  {
    id: 3,
    question:
      "CLB đã chi nhiều tiền nhất trong kì chuyển nhượng hè 2020 - 2021?",
    answers: shuffle([
      {
        text: "PSG",
        correct: false,
      },
      {
        text: "Arsenal",
        correct: true,
      },
      {
        text: "Manchester United",
        correct: false,
      },
      {
        text: "Manchester City",
        correct: false,
      },
    ]),
  },
  {
    id: 4,
    question:
      "Một trong những cầu thủ xuất sắc của châu Á đang thi đấu ở ngoại hạng anh?",
    answers: shuffle([
      {
        text: "Đặng Văn Lâm",
        correct: false,
      },
      {
        text: "Son Heung-min",
        correct: true,
      },
      {
        text: "Harry Kane",
        correct: false,
      },
      {
        text: "Theo Hernandez",
        correct: false,
      },
    ]),
  },
  {
    id: 5,
    question: "Ai từng là đội trưởng của Real Marid?",
    answers: shuffle([
      {
        text: "Sergio Ramos",
        correct: true,
      },
      {
        text: "Leo Messi",
        correct: false,
      },
      {
        text: "Kaká",
        correct: false,
      },
      {
        text: "Gareth Bale",
        correct: false,
      },
    ]),
  },
  {
    id: 6,
    question: 'Bộ phim "Chị Dậu" được chuyển thể từ tác phẩm văn học nào?',
    answers: shuffle([
      {
        text: "Người mẹ cầm súng",
        correct: false,
      },
      {
        text: "Vợ chồng A Phủ",
        correct: false,
      },
      {
        text: "Tắt đèn",
        correct: true,
      },
      {
        text: "Tuổi thơ dữ dội",
        correct: false,
      },
    ]),
  },
  {
    id: 7,
    question: "Haiku là thể thơ truyền thống của nước nào?",
    answers: shuffle([
      {
        text: "Nhật Bản",
        correct: true,
      },
      {
        text: "Mông Cổ",
        correct: false,
      },
      {
        text: "Trung Quốc",
        correct: false,
      },
      {
        text: "Hàn Quốc",
        correct: false,
      },
    ]),
  },
  {
    id: 8,
    question: "Bản hợp đồng chuyển nhượng bom tấn của Real Marid thuộc về?",
    answers: shuffle([
      {
        text: "Gareth Bale",
        correct: true,
      },
      {
        text: "Cristiano Ronaldo",
        correct: false,
      },
      {
        text: "James Rodríguez",
        correct: false,
      },
      {
        text: "Zinedine Zidane",
        correct: false,
      },
    ]),
  },
  {
    id: 9,
    question: "Who is the “Queen of Pop”",
    answers: shuffle([
      {
        text: "Lourdes Leon",
        correct: false,
      },
      {
        text: "Lady Gaga",
        correct: false,
      },
      {
        text: "Cyndi Lauper",
        correct: false,
      },
      {
        text: "Madonna",
        correct: true,
      },
    ]),
  },
  {
    id: 10,
    question: "EURO lần đầu tiên tổ chức tại quốc gia nào?",
    answers: shuffle([
      {
        text: "Pháp",
        correct: true,
      },
      {
        text: "Ý",
        correct: false,
      },
      {
        text: "Đức",
        correct: false,
      },
      {
        text: "Anh",
        correct: false,
      },
    ]),
  },
  {
    id: 11,
    question: "Tác giả “Bàn tay của Chúa” phiên bản người Pháp",
    answers: shuffle([
      {
        text: "T. Henry",
        correct: true,
      },
      {
        text: "Maradona",
        correct: false,
      },
      {
        text: "Zinédine Zidane",
        correct: false,
      },
      {
        text: "Michel Platini",
        correct: false,
      },
    ]),
  },
  {
    id: 12,
    question: "Ai là cầu thủ duy nhất từng lập 2 hattrick tại 1 kỳ EURO?",
    answers: shuffle([
      {
        text: "T. Henry",
        correct: false,
      },
      {
        text: "Marco van Basten",
        correct: false,
      },
      {
        text: "Zinédine Zidane",
        correct: false,
      },
      {
        text: "Micheal Platini",
        correct: true,
      },
    ]),
  },
  {
    id: 13,
    question: "Người Châu Á đầu tiên đoạt giải Nobel văn học",
    answers: shuffle([
      {
        text: "Mạc Ngôn",
        correct: false,
      },
      {
        text: "Kawabata Yasunari",
        correct: false,
      },
      {
        text: "Tagor",
        correct: true,
      },
      {
        text: "Lý Viễn Triết",
        correct: false,
      },
    ]),
  },
  {
    id: 14,
    question: "Một năm có bao nhiêu giải Grand Slam (quần vợt) được tổ chức",
    answers: shuffle([
      {
        text: "1",
        correct: false,
      },
      {
        text: "2",
        correct: false,
      },
      {
        text: "3",
        correct: false,
      },
      {
        text: "4",
        correct: true,
      },
    ]),
  },
  {
    id: 15,
    question:
      "Nhà văn Kim Dung (Trung Quốc) nổi tiếng với thể loại văn học gì?",
    answers: shuffle([
      {
        text: "Truyện trinh thám",
        correct: false,
      },
      {
        text: "Tiểu thuyết kiếm hiệp",
        correct: true,
      },
      {
        text: "Sử thi",
        correct: false,
      },
      {
        text: "Thơ lãng mạn",
        correct: true,
      },
    ]),
  },
];
