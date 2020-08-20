class CalcController {
    constructor() {
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
    };

    initialize() {
        this.setDisplayDateTime()
        setInterval ( () => {
            this.setDisplayDateTime()
        }, 1000);
    };

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
            day: "2-digit",
            month: "short",
            year: "2-digit"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
    };

    get displayCalc () {
        return this._displayCalcEl.innerHTML;
    };

    set displayCalc (value) {
        this._displayCalcEl.innerHTML = value; 
    };

    get currentDate () {
        return new Date();
    };

    set currentDate (value) {
        this._currentDate = value;
    };

    get displayTime() {
        return this._timeEl.innerHTML;
    };

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    };

    get displayDate () {
        return this._dateEl.innerHTML;
    };

    set displayDate (value) {
        return this._dateEl.innerHTML = value;
    };
};

                // ---------- Anotações -------------- //
    // this faz referência do próprio objeto que foi instanciado na classe
    // Encapsulamento = controla o acesso
    // 3 formas = public(todos), protected(somente da mesma classe e da classe pai), private(somente da própria classe)
    // Quando tem _ = atributo privado
    // Dentro de uma classe encontra-se variáveis(atributo) e funções(método)

    // Caso vá reutilizar algo, criar um método