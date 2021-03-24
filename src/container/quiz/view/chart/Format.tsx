const correctAnswer = (correctAnswer: string) => {
    let value: number = 0;
    if (correctAnswer === 'b') {
        value = 1;
    } else if (correctAnswer === 'c') {
        value = 2;
    } else if (correctAnswer === 'd') {
        value = 3;
    } else {
        value = 4;
    }
    return value;
}

const format = (data: any) => {
    const answers: any = data.answers;
    let array: Array<any> = [];
    Object.keys(answers).forEach(function (item) {
        let newObject: Object = { name: item.toUpperCase(), markedQuantity: answers[item] }
        array.push(newObject);
    });
    const newObject = { answers: array, correctAnswer: correctAnswer(data.correctAnswer) };
    return newObject;
}

export default format