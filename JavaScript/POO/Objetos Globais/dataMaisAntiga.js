function dataMaisAntiga(datas) {

    let dataAntiga = datas[0];

    for (let i = 0; i < datas.length; i++) {
        if (datas[i] < dataAntiga) {
            dataAntiga = datas[i]
        }
    }

    return dataAntiga
}