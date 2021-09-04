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
    question: "Đâu là tên một loại bánh Huế?",
    answers: shuffle([
      {
        text: "Khoái",
        correct: true,
      },
      {
        text: "Sướng",
        correct: false,
      },
      {
        text: "Thích",
        correct: false,
      },
      {
        text: "Vui",
        correct: false,
      },
    ]),
  },
  {
    id: 2,
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
    id: 3,
    question: "Trong các cây cầu sau, cầu nào là cầu xoay?",
    answers: shuffle([
      {
        text: "Cầu Thanh Trì",
        correct: false,
      },
      {
        text: "Cầu Thị Nại",
        correct: false,
      },
      {
        text: "Cầu Sông Hàn",
        correct: true,
      },
      {
        text: "Cầu Cần Thơ",
        correct: false,
      },
    ]),
  },
  {
    id: 4,
    question: "CLB được FIFA bình chọn là CLB xuất sắc nhất thế kỷ 20",
    answers: shuffle([
      {
        text: "Real Madrid",
        correct: true,
      },
      {
        text: "Barcelona",
        correct: false,
      },
      {
        text: "PSG",
        correct: false,
      },
      {
        text: "Bayern",
        correct: false,
      },
    ]),
  },
  {
    id: 5,
    question: "Ai đã từng là đội trưởng của Real Marid?",
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
    id: 8,
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
    question: "Đâu không phải là một tác phẩm của họa sĩ Trần Văn Cẩn?",
    answers: shuffle([
      {
        text: "Đôi bạn",
        correct: true,
      },
      {
        text: "Mẹ",
        correct: false,
      },
      {
        text: "Em Thúy",
        correct: false,
      },
      {
        text: "Em gái tôi",
        correct: false,
      },
    ]),
  },
];
