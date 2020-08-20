class CalcController {
    // Dentro de uma classe encontra-se variáveis(atributo) e funções(método)
    constructor() {
        this._displayCalc = '0'; // Display dos números
        this._dataAtual;
        // this faz referência do próprio objeto que foi instanciado na classe
        // Encapsulamento = controla o acesso
        // 3 formas = public(todos), protected(somente da mesma classe e da classe pai), private(somente da própria classe)
        // Quando tem _ = atributo privado
    };

    get displayCalc () {
        return this._displayCalc;
    };

    set displayCalc (valor) {
        this._displayCalc = valor; 
    };

    get dataAtual () {
        return this._dataAtual;
    };

    set dataAtual (data) {
        this._dataAtual = data;
    };
};