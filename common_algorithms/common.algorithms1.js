/**
 * Created by julius on 3/28/2017.
 */

module.exports = function () {
    // regExPrac1();
    var t1 = jPalindrome('pop'),
    t2 = jPalindrome('romulus');
    //jPalindrome('race car');
    //jPalindrome('afdklj324faffklj90');
    console.log(t1);
    console.log(t2);

};


function jPalindrome(str) {
    return str.toLowerCase().replace (/[^a-z0-9]/gi, "") ===
            str.split("").reverse().join("");
}

// brushing up on my Regular Expression skills
function regExPrac1() {
    var str1 = 'RomulusJuliusAugustusoOptimus';
    var pat1 = /julius/i;
    str1 = str1.replace(pat1, 'Vitalius');
    var search1 = str1.search(pat1); // cache search1

    var regTest = /US/gi.test(str1);
    var regExec = /OPT/gi.exec(str1);

    // just to see some output:
    console.log('---');
    console.log('regExec = '+regExec);
    console.log("pos of Julius = "+ (search1 === -1 ?
            'Sorry. pattern "Julius" not found :(' : search1));
}


//


