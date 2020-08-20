class CalcController {
    constructor() {
        this._displayCalc = '0'; // Display dos números
        this._currentDate;
        this.initialize();
    };

    initialize() {
        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = "4, 5, 6, 7";
        dateEl.innerHTML = '20/08/2020';
        timeEl.innerHTML = '12:25 AM';
    };

    get displayCalc () {
        return this._displayCalc;
    };

    set displayCalc (value) {
        this._displayCalc = value; 
    };

    get currentDate () {
        return this.currentDate;
    };

    set currentDate (value) {
        this._currentDate = value;
    };
};

                // ---------- Anotações -------------- //
    // this faz referência do próprio objeto que foi instanciado na classe
    // Encapsulamento = controla o acesso
    // 3 formas = public(todos), protected(somente da mesma classe e da classe pai), private(somente da própria classe)
    // Quando tem _ = atributo privado
    // Dentro de uma classe encontra-se variáveis(atributo) e funções(método)