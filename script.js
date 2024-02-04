var yes = document.querySelector('.yes')
var no = document.querySelector('.no');
const myImg = document.getElementById("myImg");
var center = document.querySelector('.center');


yes.addEventListener('click', () => {
    myImg.src = "./horimiya-hug.gif";
    center.innerHTML = "Okay Yaiiiiiiiii!!"
    yes.style.visibility = 'hidden'
    no.style.visibility = 'hidden'
})

no.addEventListener('click', () => {
    no.innerHTML = "are you sure?";
    yes.style.padding = "25px 45px";
    no.style.padding = "14px 31px";
    no.style.fontSize = "13px";
    yes.style.fontSize = "17px";
    no.addEventListener('click', () => {
        no.innerHTML = "really sure?";
        yes.style.padding = "30px 50px";
        no.style.padding = "13px 30px";
        no.style.fontSize = "12px";
        yes.style.fontSize = "18px";
        no.addEventListener('click', () => {
            no.innerHTML = "think again!!!";
            yes.style.padding = "35px 55px";
            no.style.padding = "12px 29px";
            no.style.fontSize = "11px";
            yes.style.fontSize = "19px";
            no.addEventListener('click', () => {
                no.innerHTML = "last chance!!!";
                yes.style.padding = "40px 60px";
                no.style.padding = "11px 28px";
                no.style.fontSize = "10px";
                yes.style.fontSize = "20px";
                no.addEventListener('click', () => {
                    no.innerHTML = "surely not!";
                    yes.style.padding = "45px 65px";
                    no.style.padding = "10px 27px";
                    no.style.fontSize = "9px";
                    yes.style.fontSize = "21px";
                    no.addEventListener('click', () => {
                        no.innerHTML = "you might regret this!";
                        yes.style.padding = "50px 70px";
                        yes.style.fontSize = "22px";
                        no.addEventListener('click', () => {
                            no.innerHTML = "give it another thought!!";
                            yes.style.padding = "55px 75px";
                            yes.style.fontSize = "23px";
                            no.addEventListener('click', () => {
                                no.innerHTML = "are you absolutly certain?";
                                yes.style.padding = "60px 80px";
                                yes.style.fontSize = "24px";
                                no.addEventListener('click', () => {
                                    no.innerHTML = "this could be a mistake!";
                                    yes.style.padding = "65px 85px";
                                    yes.style.fontSize = "25px";
                                    no.addEventListener('click', () => {
                                        no.innerHTML = "have a heart?";
                                        yes.style.padding = "70px 90px";
                                        yes.style.fontSize = "26px";
                                        no.addEventListener('click', () => {
                                            no.innerHTML = "dont be so cold!!!";
                                            yes.style.padding = "75px 95px";
                                            yes.style.fontSize = "27px";
                                            no.addEventListener('click', () => {
                                                no.innerHTML = "CHANGE OF HEART?";
                                                yes.style.padding = "80px 100px";
                                                yes.style.fontSize = "28px";
                                                no.addEventListener('click', () => {
                                                    no.innerHTML = "give it another thought!!";
                                                    yes.style.padding = "85px 105px";
                                                    yes.style.fontSize = "29px";
                                                    no.addEventListener('click', () => {
                                                        no.innerHTML = "wont you consider?";
                                                        yes.style.padding = "90px 110px";
                                                        yes.style.fontSize = "30px";
                                                        no.addEventListener('click', () => {
                                                            no.innerHTML = "give it another thought!!";
                                                            yes.style.padding = "95px 115px";
                                                            yes.style.fontSize = "31px";
                                                            no.addEventListener('click', () => {
                                                                no.innerHTML = "is this your final answer?";
                                                                yes.style.padding = "100px 120px";
                                                                yes.style.fontSize = "32px";
                                                                no.addEventListener('click', () => {
                                                                    no.innerHTML = "you are breaking my heart! 😭";
                                                                    yes.style.padding = "105px 125px";
                                                                    yes.style.fontSize = "33px";
                                                                    no.addEventListener('click', () => {
                                                                        no.innerHTML = "you are breaking my heart! 😭";
                                                                        yes.style.padding = "115px 135px";
                                                                        yes.style.fontSize = "35px";
                                                                        no.addEventListener('click', () => {
                                                                           
                                                                            myImg.src = "./anime-anime-blush.gif";
                                                                            center.innerHTML = "Okay you won!!"
                                                                            yes.style.visibility = 'hidden'
                                                                            no.style.visibility = 'hidden'
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                        
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})