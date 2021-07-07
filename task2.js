let task;
let previousValue = [];
let count = 0;

function myfunction() {
    task = document.getElementById("input1").value
    previousValue.push(Number(task));
    count++;

}

function helperFunction(a, b) {
    if (a > b) return true
    return false
}
console.log(previousValue, "orignal")

function submit() {

    if (count == 1) {

        console.log(task)
        for (let i = 0; i < task; i++) {
            var mycolor = "#" + ((1 << 24) * Math.random() | 0).toString(16)
                //while mycolor == "#FFFFFF"
            console.log(mycolor)

            let div = document.createElement("div")
            div.className = "randomcolor"
            div.style.backgroundColor = mycolor
            var news = document.getElementById("myclass")
            news.appendChild(div)
        }

    } else if (helperFunction(previousValue[previousValue.length - 1], previousValue[previousValue.length - 2])) {
        console.log(task, "if elser tassjk")
        console.log(previousValue, " in orignal")

        console.log(previousValue[previousValue.length - 2], "array prev")
        console.log(previousValue[previousValue.length - 1], "array cureent")
        const yourValue = previousValue[previousValue.length - 1] - previousValue[previousValue.length - 2]

        for (let i = 0; i < yourValue; i++) {
            var mycolor = "#" + ((1 << 24) * Math.random() | 0).toString(16)

            //10==>10 div aaihgya  ==>pre=[10,8] task=8>
            // helperfunction-->true,dalse [10,20] arry[pre]-arry[cuurent]=ture,salse


            let div = document.createElement("div")
            div.className = "randomcolor"
            div.style.backgroundColor = mycolor
            var news = document.getElementById("myclass")
            news.appendChild(div)
        }
    } else {
        let newvalue = previousValue[previousValue.length - 2] - task
        console.log(previousValue, " out orignal")
        console.log(newvalue)

        for (let i = 0; i < newvalue; i++) {
            var list = document.getElementById("myclass")
            list.removeChild(list.lastElementChild)

        }
    }




}