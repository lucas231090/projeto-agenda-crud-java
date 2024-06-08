function validar() {
    let nome = document.forms["frmContato"].nome.value;
    let fone = document.forms["frmContato"].fone.value;
    if (nome === "") {
        alert('Preencha o campo Nome');
        document.forms["frmContato"].nome.focus();
        return false;
    } else if (fone === "") {
        alert('Preencha o campo Fone');
        document.forms["frmContato"].fone.focus();
        return false;
    } else {
        document.forms["frmContato"].submit();
    }
}
