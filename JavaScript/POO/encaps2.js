class Porta {
    #trinco = false // propriedade trinco 

trancar(){
    this.#trinco = true
}

destrancar(){
    this.#trinco = false
    }

    get trinco(){
        return this.#trinco
    }
    set trinco (Boolean){
        this.#trinco = Boolean
    }
}
