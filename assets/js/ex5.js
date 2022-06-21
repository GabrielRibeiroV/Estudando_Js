function Calculadora() {
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
                this.realizaConta();
            
        });
    }
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            
        });
    }

    this.clear = (el) => this.display.value = '';
    

    this.del = (el) => this.display.value = this.display.value.slice(0, -1);
    
    this.realizaConta = (el) => {
        try{
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta invalida');
                return
            }
            this.display.value = conta;

        }catch(e){
            alert('Erro ao realizar a conta');
            return;
        }
    }

        this.addNumDisplay = el => {
        this.display.value += el.innerText;
            this.display.focus();
    }
    }


const calculadora = new Calculadora();
calculadora.inicia();