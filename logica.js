function somar(){
    let tbl = window.document.getElementById(`tabela`)
    let fi0 = window.document.getElementById(`filme0`)
    let honr = window.document.getElementById(`hnr`)
    let cuo = window.document.getElementById(`co`)
    let fi1 = window.document.getElementById(`filme1`)
    let res = window.document.getElementById(`res`)
    let tb = Number(tbl.value)
    let f0 = Number(fi0.value)
    let hnr = Number(honr.value)
    let co = Number(cuo.value)
    let f1 = Number(fi1.value)
    let stb0 = tb * hnr  
    let stb1 = tb * co
    let sflm = f0 * f1
    let total = stb0 + stb1 + sflm
    res.innerText = `Honorários R$: ${stb0.toFixed(2)}
    Custo Operacional R$: ${stb1.toFixed(2)}
    Filme M² R$: ${sflm.toFixed(2)}
    O valor total do procedimento é de R$: ${total.toFixed(2)}`
    res.style.fontWeight = `bold`
    }
window.alert(`Seja Bem Vindo! 
    A finalidade dessa página é lhe auxiliar nos valores em SADT.`)
