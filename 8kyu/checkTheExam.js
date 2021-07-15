const checkExam = (answers, responses) => {
    const score = responses.reduce((total, response, index) => {
      if (!response) return total;
      if (response === answers[index]) return total + 4;
      if (response !== answers[index]) return total - 1;
  
      return total;
    }, 0);
  
    return score > 0 ? score : 0;
  };