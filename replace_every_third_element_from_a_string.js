//🙌🙌 replace every third element from a string 🙌🙌

function sentence(sen) {
    let str1 = str.replaceAll(" ", "")                                       // replacing all spaces with nospace
    let tocken = 'xYjUki1'                                                   //tocken if u want to use
    let str2 = str1 + tocken                                                 // concating both the string
    //console.log(str2);                                                     //output :hitheremyselfamarduttupadhyayxYjUki1
    let newStr = ''                     
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 4 == 0) {
            newStr += '_'                                                     // it will replace character at every consecutive 4th place with underscore
        } else {
            newStr += str2[i]                                                 // it will copy the character at given index
        }
    }
    return newStr                                                              //return new string
}

let str = "hi there my self amar dutt upadhyay"  
console.log(sentence(str));                                                       //calling the function



//output: hit_ere_yse_fam_rdu_tup_dhy_yxY_Uki
