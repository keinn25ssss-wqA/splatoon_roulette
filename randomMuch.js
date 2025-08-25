window.addEventListener('DOMContentLoaded',()=>{
    // 情報登録ボタン処理
    const entryButton = document.querySelectorAll('.js-entry-data');
    entryButton.forEach((items)=>{
        items.addEventListener('click', entryData);
    })
    // ランダムボタン処理
    const randomButton = document.getElementById('random-button');
    randomButton.addEventListener('click', randomRulet);
})

// 情報登録ボタン処理
function entryData(){
    let ID = this.id;
    // 要素の絞り込み
    let content = document.getElementsByName(ID)[0];
    content.children[1].children[0].value;//名前
    content.children[2].children[0].value;//武器A
    content.children[3].children[0].value;//武器B
    content.children[4].children[0].value;//武器C
    content.children[5].children[0].value;//武器D
    content.children[6].children[0].value;//武器D
    let name = content.children[1].children[0].value;// 名前の取得
    let bukiA = content.children[2].children[0].value;// 武器Aの取得
    let bukiB = content.children[3].children[0].value;// 武器Bの取得
    let bukiC = content.children[4].children[0].value;// 武器Cの取得
    let bukiD = content.children[5].children[0].value;// 武器Dの取得
    let bukiE = content.children[6].children[0].value;// 武器Eの取得
    // 確認及び登録
    let nameId = 'name'+ID;
    document.getElementById(nameId).value = name;
    let bukiId01 = 'buki_01_'+ID; 
    document.getElementById(bukiId01).value = bukiA;
    let bukiId02 = 'buki_02_'+ID; 
    document.getElementById(bukiId02).value = bukiB;
    let bukiId03 = 'buki_03_'+ID; 
    document.getElementById(bukiId03).value = bukiC;
    let bukiId04 = 'buki_04_'+ID; 
    document.getElementById(bukiId04).value = bukiD;
    let bukiId05 = 'buki_05_'+ID; 
    document.getElementById(bukiId05).value = bukiE;

    // 登録者情報を出力
    let output = 'data'+ID;
    document.getElementById(output).textContent='登録者'+ID+'の名前：'+name+'、使用武器：「'+bukiA+'」'+'「'+bukiB+'」'+'「'+bukiC+'」'+'「'+bukiD+'」'+'「'+bukiE+'」';
}

// ランダムボタン処理
function randomRulet(){
    // 配列
    let idData = Array();
    idData = {0:'A',1:'B',2:'C',3:'D',4:'E',5:'F',6:'G',7:'H'};
    // 登録人数を把握
    let countmember = document.querySelectorAll('.js-name-check');
    let countNum = 0;
    countmember.forEach((items)=>{
        if(items.value!=''){
            countNum ++;
        }
    })
    // 登録人数分だけ処理
    let NameA = '';
    let NameB = '';
    let NameC = '';
    let NameD = '';
    let NameE = '';
    let NameF = '';
    let NameG = '';
    let NameH = '';

    if(countNum!=0){
        // 配列を作成
        for(let i=0;i<countNum;i++){
            let newId = idData[i];//A,B,C
            let nameId = 'name'+newId;
            let bukiId01 = 'buki_01_'+newId; 
            let bukiId02 = 'buki_02_'+newId; 
            let bukiId03 = 'buki_03_'+newId; 
            let bukiId04 = 'buki_04_'+newId; 
            let bukiId05 = 'buki_05_'+newId; 
            let newName = document.getElementById(nameId).value;
            let newBuki01 = document.getElementById(bukiId01).value;
            let newBuki02 = document.getElementById(bukiId02).value;
            let newBuki03 = document.getElementById(bukiId03).value;
            let newBuki04 = document.getElementById(bukiId04).value;
            let newBuki05 = document.getElementById(bukiId05).value;
            let arrayLength = 0;//配列の個数

            if(newId == 'A'){
                NameA = newName;
                let bukiA = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiA[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiA[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiA[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiA[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiA[4] = newBuki05;
                }
                arrayLength = bukiA.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameA+'は「'+bukiA[bukiNomber]+'」を使用してください。';
            } else if(newId == 'B'){
                NameB = newName;
                let bukiB = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiB[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiB[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiB[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiB[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiB[4] = newBuki05;
                }
                arrayLength = bukiB.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameB+'は「'+bukiB[bukiNomber]+'」を使用してください。';
            }else if(newId == 'C'){
                NameC = newName;
                let bukiC = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiC[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiC[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiC[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiC[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiC[4] = newBuki05;
                }
                arrayLength = bukiC.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameC+'は「'+bukiC[bukiNomber]+'」を使用してください。';
            }else if(newId == 'D'){
                NameD = newName;
                let bukiD = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiD[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiD[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiD[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiD[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiD[4] = newBuki05;
                }
                arrayLength = bukiD.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameD+'は「'+bukiD[bukiNomber]+'」を使用してください。';
            }else if(newId == 'E'){
                NameE = newName;
                let bukiE = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiE[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiE[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiE[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiE[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiE[4] = newBuki05;
                }
                arrayLength = bukiE.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameE+'は「'+bukiE[bukiNomber]+'」を使用してください。';
            } else if(newId == 'F'){
                NameF = newName;
                let bukiF = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiF[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiF[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiF[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiF[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiF[4] = newBuki05;
                }
                arrayLength = bukiF.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameF+'は「'+bukiF[bukiNomber]+'」を使用してください。';
            }else if(newId == 'G'){
                NameG = newName;
                let bukiG = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiG[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiG[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiG[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiG[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiG[4] = newBuki05;
                }
                arrayLength = bukiG.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameG+'は「'+bukiG[bukiNomber]+'」を使用してください。';
            }else if(newId == 'H'){
                NameH = newName;
                let bukiH = new Array();
                // 武器の値の確認
                if(newBuki01!=''){
                    bukiH[0] = newBuki01;
                }
                if(newBuki02!=''){
                    bukiH[1] = newBuki02;
                }
                if(newBuki03!=''){
                    bukiH[2] = newBuki03;
                }
                if(newBuki04!=''){
                    bukiH[3] = newBuki04;
                }
                if(newBuki05!=''){
                    bukiH[4] = newBuki05;
                }
                arrayLength = bukiH.length;//配列の要素数のカウント
                let bukiNomber = Math.floor(Math.random()*arrayLength);
                let htmlName = 'randomData'+newId;
                let outputHtml = document.getElementById(htmlName);
                outputHtml.textContent = NameH+'は「'+bukiH[bukiNomber]+'」を使用してください。';
            }
        }
    }
    // foeachで回し、ランダムで1回取得、出力

}
