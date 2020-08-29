class CalcController {
    constructor() {
        this._locale = 'pt-br'
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        this._operation = [];
    };

    initialize() {
        this.setDisplayDateTime()
        setInterval ( () => {
            this.setDisplayDateTime()
        }, 1000);
    };

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        }); // passando em todos os eventos
    };

    clearAll() {
        this._operation = []; // inicia do zero
    }

    clearEntry() {
        this._operation.pop(); // tira o ultimo do array
    }

    getLastOperation () {
        return this._operation[this._operation.length-1];
    }

    isOperator(value) {
        // if (['+', '-', '*', '%', '/'].indexOf(value) > -1) {
        //     return true;
        // } else {
        //     return false;
        // }

        return (['+', '-', '*', '%', '/'].indexOf(value)-1);
    }

    setLastOperation (value) {
        this._operation[this._operation.length-1] = value;
    }

    addOperation(value) {
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {
                this.setLastOperation(value);
            } else if (isNaN(value)) {
                console.log(value);
            } else {
                this._operation.push(value);
            }
        } else {
           let newValue = this.getLastOperation().toString() + value.toString();
           this.setLastOperation(parseInt(newValue));
        }

        console.log(this._operation);
    }

    setError() {
        this.displayCalc = "ERROR"
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
             case 'multiplicacao':
                this.addOperation('*');
                break;
             case 'divisao':
                this.addOperation('/');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
             case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError()
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                let textbtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textbtn);
            }); // e = parametro
            
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
                btn.style.cursor = "pointer";
            });
        });

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