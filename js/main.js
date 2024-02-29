
var videosLoadMoreCounter = 0;
document.getElementById("videosLoadMoreButton").addEventListener("click", function (){
  videosLoadMoreCounter++;

  var videosBlackBox = document.getElementById("blackSpace");
  var currentHeight = parseInt(window.getComputedStyle(videosBlackBox).height);
  var videosLoadMoreButton = document.getElementById("videosLoadMoreButton");
  var buttonTop = parseInt(window.getComputedStyle(videosLoadMoreButton).top);





  var latestBlock = document.getElementById("latestBlock");
  var latestBlockTop = parseInt(window.getComputedStyle(latestBlock).top);

  var commBlock = document.getElementById("communityBlock");
  var commBlockTop = parseInt(window.getComputedStyle(communityBlock).top);

  var footerBackgroundV = document.getElementById("footerBackground");
  var footerTop = parseInt(window.getComputedStyle(footerBackgroundV).top);

  var videosLoadMoreRowOne = document.getElementById("videosLoadMoreOne");
  var videosLoadMoreRowTwo = document.getElementById("videosLoadMoreTwo");
  var videosLoadMoreRowThree = document.getElementById("videosLoadMoreThree");



  videosBlackBox.style.height = (currentHeight + 365) + "px";
  latestBlock.style.top = (latestBlockTop + 387) + "px";
  videosLoadMoreButton.style.top = (buttonTop + 375) + "px";

  commBlock.style.top = (commBlockTop + 387) + "px";


  switch (videosLoadMoreCounter){

    case 1:

      videosBlackBox.style.height = (currentHeight + 375) + "px";
      latestBlock.style.top = (latestBlockTop + 375) + "px";
      videosLoadMoreButton.style.top = (buttonTop + 375) + "px";
      commBlock.style.top = (commBlockTop + 387) + "px";
      footerBackgroundV.style.top = (footerTop + 387) + "px";
      videosLoadMoreRowOne.style.display = 'block';

      break;


    case 2:

      videosBlackBox.style.height = (currentHeight + 450) + "px";
      latestBlock.style.top = (latestBlockTop + 450) + "px";
      videosLoadMoreButton.style.top = (buttonTop + 450) + "px";

      commBlock.style.top = (commBlockTop + 450) + "px";
      footerBackgroundV.style.top = (footerTop + 450) + "px";
      videosLoadMoreRowTwo.style.display = 'block';

      break;


    case 3:

      videosBlackBox.style.height = (currentHeight + 290) + "px";
      videosLoadMoreRowThree.style.display = 'block';
      latestBlock.style.top = (latestBlockTop + 290) + "px";
      commBlock.style.top = (commBlockTop + 290) + "px";

      footerBackgroundV.style.top = (footerTop + 290) + "px";

      var vidLoadMoreButton = document.getElementById("videosLoadMoreButton");
      vidLoadMoreButton.style.display = 'none';

      break;





  }




});


var loadMoreCounter = 0;

document.getElementById("communityLoadMoreButton").addEventListener("click", function (){
  loadMoreCounter++;
  var communityBlock = document.getElementById("communityBlock");
  var footerBackground = document.getElementById("footerBackground");
  var communityLoadMoreButton = document.getElementById("communityLoadMoreButton");

  // Get the current height and top of the communityBlock
  var currentHeight = parseInt(window.getComputedStyle(communityBlock).height);
  var currentTop = parseInt(window.getComputedStyle(communityBlock).top);

  // Update the height of the communityBlock first
  communityBlock.style.height = (currentHeight + 755) + "px";




  switch (loadMoreCounter) {
    case 1:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);

      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + "px";

      }


      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";



      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";

      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";
      }



























      var rankEleven = document.getElementById("communityRankEleven");
      rankEleven.style.display = 'block'; // This will make it visible again

      var rankTwelve = document.getElementById("communityRankTwelve");
      rankTwelve.style.display = 'block';

      var rankThirteen = document.getElementById("communityRankThirteen");
      rankThirteen.style.display = 'block';

      var rankFourteen = document.getElementById("communityRankFourteen");
      rankFourteen.style.display = 'block';

      var rankFifteen = document.getElementById("communityRankFifteen");
      rankFifteen.style.display = 'block';

      var rankSixteen = document.getElementById("communityRankSixteen");
      rankSixteen.style.display = 'block';

      var rankSeventeen = document.getElementById("communityRankSeventeen");
      rankSeventeen.style.display = 'block';

      var rankEighteen = document.getElementById("communityRankEighteen");
      rankEighteen.style.display = 'block';

      var rankNineteen = document.getElementById("communityRankNineteen");
      rankNineteen.style.display = 'block';

      var rankTwenty = document.getElementById("communityRankTwenty");
      rankTwenty.style.display = 'block';


      var dividerEleven = document.getElementById("communityGreyDividerEleven");
      dividerEleven.style.display = 'block';

      var dividerTwelve = document.getElementById("communityGreyDividerTwelve");
      dividerTwelve.style.display = 'block';

      var dividerThirteen = document.getElementById("communityGreyDividerThirteen");
      dividerThirteen.style.display = 'block';

      var dividerFourteen = document.getElementById("communityGreyDividerFourteen");
      dividerFourteen.style.display = 'block';

      var dividerFifteen = document.getElementById("communityGreyDividerFifteen");
      dividerFifteen.style.display = 'block';

      var dividerSixteen = document.getElementById("communityGreyDividerSixteen");
      dividerSixteen.style.display = 'block';

      var dividerSeventeen = document.getElementById("communityGreyDividerSeventeen");
      dividerSeventeen.style.display = 'block';

      var dividerEighteen = document.getElementById("communityGreyDividerEighteen");
      dividerEighteen.style.display = 'block';

      var dividerNineteen = document.getElementById("communityGreyDividerNineteen");
      dividerNineteen.style.display = 'block';

      var dividerTwenty = document.getElementById("communityGreyDividerTwenty");
      dividerTwenty.style.display = 'block';

      break;

    case 2:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);

      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + "px";

      }


      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";

      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";
      }



      var rankTwentyOne = document.getElementById("communityRankTwentyOne");
      rankTwentyOne.style.display = 'block';

      var rankTwentyTwo = document.getElementById("communityRankTwentyTwo");
      rankTwentyTwo.style.display = 'block';

      var rankTwentyThree = document.getElementById("communityRankTwentyThree");
      rankTwentyThree.style.display = 'block';

      var rankTwentyFour = document.getElementById("communityRankTwentyFour");
      rankTwentyFour.style.display = 'block';

      var rankTwentyFive = document.getElementById("communityRankTwentyFive");
      rankTwentyFive.style.display = 'block';

      var rankTwentySix = document.getElementById("communityRankTwentySix");
      rankTwentySix.style.display = 'block';

      var rankTwentySeven = document.getElementById("communityRankTwentySeven");
      rankTwentySeven.style.display = 'block';

      var rankTwentyEight = document.getElementById("communityRankTwentyEight");
      rankTwentyEight.style.display = 'block';

      var rankTwentyNine = document.getElementById("communityRankTwentyNine");
      rankTwentyNine.style.display = 'block';

      var rankThirty = document.getElementById("communityRankThirty");
      rankThirty.style.display = 'block';

      var dividerTwentyOne = document.getElementById("communityGreyDividerTwentyOne");
      dividerTwentyOne.style.display = 'block';

      var dividerTwentyTwo = document.getElementById("communityGreyDividerTwentyTwo");
      dividerTwentyTwo.style.display = 'block';

      var dividerTwentyThree = document.getElementById("communityGreyDividerTwentyThree");
      dividerTwentyThree.style.display = 'block';

      var dividerTwentyFour = document.getElementById("communityGreyDividerTwentyFour");
      dividerTwentyFour.style.display = 'block';

      var dividerTwentyFive = document.getElementById("communityGreyDividerTwentyFive");
      dividerTwentyFive.style.display = 'block';

      var dividerTwentySix = document.getElementById("communityGreyDividerTwentySix");
      dividerTwentySix.style.display = 'block';

      var dividerTwentySeven = document.getElementById("communityGreyDividerTwentySeven");
      dividerTwentySeven.style.display = 'block';

      var dividerTwentyEight = document.getElementById("communityGreyDividerTwentyEight");
      dividerTwentyEight.style.display = 'block';

      var dividerTwentyNine = document.getElementById("communityGreyDividerTwentyNine");
      dividerTwentyNine.style.display = 'block';

      var dividerThirty = document.getElementById("communityGreyDividerThirty");
      dividerThirty.style.display = 'block';


      break;

    case 3:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);
      var buttonPadding = document.getElementById('communityLoadMoreButton');
      var communityHeight = document.getElementById("communityBlock");
      var currentCommunityHeight = parseInt(window.getComputedStyle(communityHeight).height);

      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + "px";
        buttonPadding.style.marginTop = '25px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }




      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";

        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";            buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }




      var rankThirtyOne = document.getElementById("communityRankThirtyOne");
      rankThirtyOne.style.display = 'block';

      var rankThirtyTwo = document.getElementById("communityRankThirtyTwo");
      rankThirtyTwo.style.display = 'block';

      var rankThirtyThree = document.getElementById("communityRankThirtyThree");
      rankThirtyThree.style.display = 'block';

      var rankThirtyFour = document.getElementById("communityRankThirtyFour");
      rankThirtyFour.style.display = 'block';

      var rankThirtyFive = document.getElementById("communityRankThirtyFive");
      rankThirtyFive.style.display = 'block';

      var rankThirtySix = document.getElementById("communityRankThirtySix");
      rankThirtySix.style.display = 'block';

      var rankThirtySeven = document.getElementById("communityRankThirtySeven");
      rankThirtySeven.style.display = 'block';

      var rankThirtyEight = document.getElementById("communityRankThirtyEight");
      rankThirtyEight.style.display = 'block';

      var rankThirtyNine = document.getElementById("communityRankThirtyNine");
      rankThirtyNine.style.display = 'block';

      var rankForty = document.getElementById("communityRankForty");
      rankForty.style.display = 'block';

      var dividerThirtyOne = document.getElementById("communityGreyDividerThirtyOne");
      dividerThirtyOne.style.display = 'block';

      var dividerThirtyTwo = document.getElementById("communityGreyDividerThirtyTwo");
      dividerThirtyTwo.style.display = 'block';

      var dividerThirtyThree = document.getElementById("communityGreyDividerThirtyThree");
      dividerThirtyThree.style.display = 'block';

      var dividerThirtyFour = document.getElementById("communityGreyDividerThirtyFour");
      dividerThirtyFour.style.display = 'block';

      var dividerThirtyFive = document.getElementById("communityGreyDividerThirtyFive");
      dividerThirtyFive.style.display = 'block';

      var dividerThirtySix = document.getElementById("communityGreyDividerThirtySix");
      dividerThirtySix.style.display = 'block';

      var dividerThirtySeven = document.getElementById("communityGreyDividerThirtySeven");
      dividerThirtySeven.style.display = 'block';

      var dividerThirtyEight = document.getElementById("communityGreyDividerThirtyEight");
      dividerThirtyEight.style.display = 'block';

      var dividerThirtyNine = document.getElementById("communityGreyDividerThirtyNine");
      dividerThirtyNine.style.display = 'block';

      var dividerForty = document.getElementById("communityGreyDividerForty");
      dividerForty.style.display = 'block';


      break;

    case 4:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);

      var buttonPadding = document.getElementById('communityLoadMoreButton');



      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + "px";
        buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";
        buttonPadding.style.marginTop = '35px';
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";
        buttonPadding.style.marginTop = '35px';


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";
        buttonPadding.style.marginTop = '35px';


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";
        buttonPadding.style.marginTop = '35px';


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";
        buttonPadding.style.marginTop = '35px';

      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }




      var rankFortyOne = document.getElementById("communityRankFortyOne");
      rankFortyOne.style.display = 'block';

      var rankFortyTwo = document.getElementById("communityRankFortyTwo");
      rankFortyTwo.style.display = 'block';

      var rankFortyThree = document.getElementById("communityRankFortyThree");
      rankFortyThree.style.display = 'block';

      var rankFortyFour = document.getElementById("communityRankFortyFour");
      rankFortyFour.style.display = 'block';

      var rankFortyFive = document.getElementById("communityRankFortyFive");
      rankFortyFive.style.display = 'block';

      var rankFortySix = document.getElementById("communityRankFortySix");
      rankFortySix.style.display = 'block';

      var rankFortySeven = document.getElementById("communityRankFortySeven");
      rankFortySeven.style.display = 'block';

      var rankFortyEight = document.getElementById("communityRankFortyEight");
      rankFortyEight.style.display = 'block';

      var rankFortyNine = document.getElementById("communityRankFortyNine");
      rankFortyNine.style.display = 'block';

      var rankFifty = document.getElementById("communityRankFifty");
      rankFifty.style.display = 'block';

      var dividerFortyOne = document.getElementById("communityGreyDividerFortyOne");
      dividerFortyOne.style.display = 'block';

      var dividerFortyTwo = document.getElementById("communityGreyDividerFortyTwo");
      dividerFortyTwo.style.display = 'block';

      var dividerFortyThree = document.getElementById("communityGreyDividerFortyThree");
      dividerFortyThree.style.display = 'block';

      var dividerFortyFour = document.getElementById("communityGreyDividerFortyFour");
      dividerFortyFour.style.display = 'block';

      var dividerFortyFive = document.getElementById("communityGreyDividerFortyFive");
      dividerFortyFive.style.display = 'block';

      var dividerFortySix = document.getElementById("communityGreyDividerFortySix");
      dividerFortySix.style.display = 'block';

      var dividerFortySeven = document.getElementById("communityGreyDividerFortySeven");
      dividerFortySeven.style.display = 'block';

      var dividerFortyEight = document.getElementById("communityGreyDividerFortyEight");
      dividerFortyEight.style.display = 'block';

      var dividerFortyNine = document.getElementById("communityGreyDividerFortyNine");
      dividerFortyNine.style.display = 'block';

      var dividerFifty = document.getElementById("communityGreyDividerFifty");
      dividerFifty.style.display = 'block';

      break;

    case 5:


      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);
      var buttonPadding = document.getElementById('communityLoadMoreButton');
      var communityHeight = document.getElementById("communityBlock");
      var currentCommunityHeight = parseInt(window.getComputedStyle(communityHeight).height);




      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4305  + 108 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }





      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }






      var rankFiftyOne = document.getElementById("communityRankFiftyOne");
      rankFiftyOne.style.display = 'block';

      var rankFiftyTwo = document.getElementById("communityRankFiftyTwo");
      rankFiftyTwo.style.display = 'block';

      var rankFiftyThree = document.getElementById("communityRankFiftyThree");
      rankFiftyThree.style.display = 'block';

      var rankFiftyFour = document.getElementById("communityRankFiftyFour");
      rankFiftyFour.style.display = 'block';

      var rankFiftyFive = document.getElementById("communityRankFiftyFive");
      rankFiftyFive.style.display = 'block';

      var rankFiftySix = document.getElementById("communityRankFiftySix");
      rankFiftySix.style.display = 'block';

      var rankFiftySeven = document.getElementById("communityRankFiftySeven");
      rankFiftySeven.style.display = 'block';

      var rankFiftyEight = document.getElementById("communityRankFiftyEight");
      rankFiftyEight.style.display = 'block';

      var rankFiftyNine = document.getElementById("communityRankFiftyNine");
      rankFiftyNine.style.display = 'block';

      var rankSixty = document.getElementById("communityRankSixty");
      rankSixty.style.display = 'block';

      var dividerFiftyOne = document.getElementById("communityGreyDividerFiftyOne");
      dividerFiftyOne.style.display = 'block';

      var dividerFiftyTwo = document.getElementById("communityGreyDividerFiftyTwo");
      dividerFiftyTwo.style.display = 'block';

      var dividerFiftyThree = document.getElementById("communityGreyDividerFiftyThree");
      dividerFiftyThree.style.display = 'block';

      var dividerFiftyFour = document.getElementById("communityGreyDividerFiftyFour");
      dividerFiftyFour.style.display = 'block';

      var dividerFiftyFive = document.getElementById("communityGreyDividerFiftyFive");
      dividerFiftyFive.style.display = 'block';

      var dividerFiftySix = document.getElementById("communityGreyDividerFiftySix");
      dividerFiftySix.style.display = 'block';

      var dividerFiftySeven = document.getElementById("communityGreyDividerFiftySeven");
      dividerFiftySeven.style.display = 'block';

      var dividerFiftyEight = document.getElementById("communityGreyDividerFiftyEight");
      dividerFiftyEight.style.display = 'block';

      var dividerFiftyNine = document.getElementById("communityGreyDividerFiftyNine");
      dividerFiftyNine.style.display = 'block';

      var dividerSixty = document.getElementById("communityGreyDividerSixty");
      dividerSixty.style.display = 'block';


      break;

    case 6:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);
      var buttonPadding = document.getElementById('communityLoadMoreButton');
      var communityHeight = document.getElementById("communityBlock");
      var currentCommunityHeight = parseInt(window.getComputedStyle(communityHeight).height);


      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + "px";
        buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";
        buttonPadding.style.marginTop = '35px';
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";
        buttonPadding.style.marginTop = '35px';

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
      }




      var rankSixtyOne = document.getElementById("communityRankSixtyOne");
      rankSixtyOne.style.display = 'block';

      var rankSixtyTwo = document.getElementById("communityRankSixtyTwo");
      rankSixtyTwo.style.display = 'block';

      var rankSixtyThree = document.getElementById("communityRankSixtyThree");
      rankSixtyThree.style.display = 'block';

      var rankSixtyFour = document.getElementById("communityRankSixtyFour");
      rankSixtyFour.style.display = 'block';

      var rankSixtyFive = document.getElementById("communityRankSixtyFive");
      rankSixtyFive.style.display = 'block';

      var rankSixtySix = document.getElementById("communityRankSixtySix");
      rankSixtySix.style.display = 'block';

      var rankSixtySeven = document.getElementById("communityRankSixtySeven");
      rankSixtySeven.style.display = 'block';

      var rankSixtyEight = document.getElementById("communityRankSixtyEight");
      rankSixtyEight.style.display = 'block';

      var rankSixtyNine = document.getElementById("communityRankSixtyNine");
      rankSixtyNine.style.display = 'block';

      var rankSeventy = document.getElementById("communityRankSeventy");
      rankSeventy.style.display = 'block';

      var dividerSixtyOne = document.getElementById("communityGreyDividerSixtyOne");
      dividerSixtyOne.style.display = 'block';

      var dividerSixtyTwo = document.getElementById("communityGreyDividerSixtyTwo");
      dividerSixtyTwo.style.display = 'block';

      var dividerSixtyThree = document.getElementById("communityGreyDividerSixtyThree");
      dividerSixtyThree.style.display = 'block';

      var dividerSixtyFour = document.getElementById("communityGreyDividerSixtyFour");
      dividerSixtyFour.style.display = 'block';

      var dividerSixtyFive = document.getElementById("communityGreyDividerSixtyFive");
      dividerSixtyFive.style.display = 'block';

      var dividerSixtySix = document.getElementById("communityGreyDividerSixtySix");
      dividerSixtySix.style.display = 'block';

      var dividerSixtySeven = document.getElementById("communityGreyDividerSixtySeven");
      dividerSixtySeven.style.display = 'block';

      var dividerSixtyEight = document.getElementById("communityGreyDividerSixtyEight");
      dividerSixtyEight.style.display = 'block';

      var dividerSixtyNine = document.getElementById("communityGreyDividerSixtyNine");
      dividerSixtyNine.style.display = 'block';

      var dividerSeventy = document.getElementById("communityGreyDividerSeventy");
      dividerSeventy.style.display = 'block';


      break;

    case 7:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);
      var buttonPadding = document.getElementById('communityLoadMoreButton');
      var communityHeight = document.getElementById("communityBlock");
      var currentCommunityHeight = parseInt(window.getComputedStyle(communityHeight).height);

      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + 40 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";
        buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '35px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }




      var rankSeventyOne = document.getElementById("communityRankSeventyOne");
      rankSeventyOne.style.display = 'block';

      var rankSeventyTwo = document.getElementById("communityRankSeventyTwo");
      rankSeventyTwo.style.display = 'block';

      var rankSeventyThree = document.getElementById("communityRankSeventyThree");
      rankSeventyThree.style.display = 'block';

      var rankSeventyFour = document.getElementById("communityRankSeventyFour");
      rankSeventyFour.style.display = 'block';

      var rankSeventyFive = document.getElementById("communityRankSeventyFive");
      rankSeventyFive.style.display = 'block';

      var rankSeventySix = document.getElementById("communityRankSeventySix");
      rankSeventySix.style.display = 'block';

      var rankSeventySeven = document.getElementById("communityRankSeventySeven");
      rankSeventySeven.style.display = 'block';

      var rankSeventyEight = document.getElementById("communityRankSeventyEight");
      rankSeventyEight.style.display = 'block';

      var rankSeventyNine = document.getElementById("communityRankSeventyNine");
      rankSeventyNine.style.display = 'block';

      var rankEighty = document.getElementById("communityRankEighty");
      rankEighty.style.display = 'block';

      var dividerSeventyOne = document.getElementById("communityGreyDividerSeventyOne");
      dividerSeventyOne.style.display = 'block';

      var dividerSeventyTwo = document.getElementById("communityGreyDividerSeventyTwo");
      dividerSeventyTwo.style.display = 'block';

      var dividerSeventyThree = document.getElementById("communityGreyDividerSeventyThree");
      dividerSeventyThree.style.display = 'block';

      var dividerSeventyFour = document.getElementById("communityGreyDividerSeventyFour");
      dividerSeventyFour.style.display = 'block';

      var dividerSeventyFive = document.getElementById("communityGreyDividerSeventyFive");
      dividerSeventyFive.style.display = 'block';

      var dividerSeventySix = document.getElementById("communityGreyDividerSeventySix");
      dividerSeventySix.style.display = 'block';

      var dividerSeventySeven = document.getElementById("communityGreyDividerSeventySeven");
      dividerSeventySeven.style.display = 'block';

      var dividerSeventyEight = document.getElementById("communityGreyDividerSeventyEight");
      dividerSeventyEight.style.display = 'block';

      var dividerSeventyNine = document.getElementById("communityGreyDividerSeventyNine");
      dividerSeventyNine.style.display = 'block';

      var dividerEighty = document.getElementById("communityGreyDividerEighty");
      dividerEighty.style.display = 'block';



      break

    case 8:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);
      var buttonPadding = document.getElementById('communityLoadMoreButton');
      var communityHeight = document.getElementById("communityBlock");
      var currentCommunityHeight = parseInt(window.getComputedStyle(communityHeight).height);


      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 108 + 40 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }



      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";
        buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";           buttonPadding.style.marginTop = '50px';
        communityHeight.style.height = currentCommunityHeight + 50 + "px"
      }






      var rankEightyOne = document.getElementById("communityRankEightyOne");
      rankEightyOne.style.display = 'block';

      var rankEightyTwo = document.getElementById("communityRankEightyTwo");
      rankEightyTwo.style.display = 'block';

      var rankEightyThree = document.getElementById("communityRankEightyThree");
      rankEightyThree.style.display = 'block';

      var rankEightyFour = document.getElementById("communityRankEightyFour");
      rankEightyFour.style.display = 'block';

      var rankEightyFive = document.getElementById("communityRankEightyFive");
      rankEightyFive.style.display = 'block';

      var rankEightySix = document.getElementById("communityRankEightySix");
      rankEightySix.style.display = 'block';

      var rankEightySeven = document.getElementById("communityRankEightySeven");
      rankEightySeven.style.display = 'block';

      var rankEightyEight = document.getElementById("communityRankEightyEight");
      rankEightyEight.style.display = 'block';

      var rankEightyNine = document.getElementById("communityRankEightyNine");
      rankEightyNine.style.display = 'block';

      var rankNinety = document.getElementById("communityRankNinety");
      rankNinety.style.display = 'block';

      var dividerEightyOne = document.getElementById("communityGreyDividerEightyOne");
      dividerEightyOne.style.display = 'block';

      var dividerEightyTwo = document.getElementById("communityGreyDividerEightyTwo");
      dividerEightyTwo.style.display = 'block';

      var dividerEightyThree = document.getElementById("communityGreyDividerEightyThree");
      dividerEightyThree.style.display = 'block';

      var dividerEightyFour = document.getElementById("communityGreyDividerEightyFour");
      dividerEightyFour.style.display = 'block';

      var dividerEightyFive = document.getElementById("communityGreyDividerEightyFive");
      dividerEightyFive.style.display = 'block';

      var dividerEightySix = document.getElementById("communityGreyDividerEightySix");
      dividerEightySix.style.display = 'block';

      var dividerEightySeven = document.getElementById("communityGreyDividerEightySeven");
      dividerEightySeven.style.display = 'block';

      var dividerEightyEight = document.getElementById("communityGreyDividerEightyEight");
      dividerEightyEight.style.display = 'block';

      var dividerEightyNine = document.getElementById("communityGreyDividerEightyNine");
      dividerEightyNine.style.display = 'block';

      var dividerNinety = document.getElementById("communityGreyDividerNinety");
      dividerNinety.style.display = 'block';


      break;

    case 9:

      communityLoadMoreButton.style.top = (parseInt(window.getComputedStyle(communityLoadMoreButton).top) + 760) + "px";
      var buttonTop = parseInt(window.getComputedStyle(communityLoadMoreButton).top);


      if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4370  + 108 + "px";

      }


      else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530  + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 530 + 385 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 1435 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 915 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 415 + 530 + 385 + 915 + 915 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 335 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 335 + 580 + 580 + 580 + 670 + "px";


      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 215 + 400 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6428 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 4275  + 88 + 530 + 335 + 2115 + "px";

      } else if (chartsLoadMoreCounter === 0 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 4275 + 88 + 530 + 335 + 2000 + 1030 + "px";

      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 920 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6993 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7900 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 1310 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7378 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8293 + "px";
      }


      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 1365 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7828 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8743 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 395 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7203 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 8118 + "px";
      }

      else if (chartsLoadMoreCounter === 1 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 8118 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 5923 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 5923 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 330 + 30  + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6313 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6313 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4200 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7683 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7683 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7683 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 4490 + 88 + 530 + 335 + 30 + 450 + 290 + 845 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7058 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 2 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7058 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 395 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 395 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 840 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 840 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 3 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 725 + 405 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 6693 + 775 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 0 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 6693 + 775 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 1 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 915 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 2 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 915 + 915 + 915 + "px";
      }


      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 0) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 1) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 2) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + "px";
      }

      else if (chartsLoadMoreCounter === 4 && videosLoadMoreCounter === 3 && latestLoadMoreCounter === 3) {
        footerBackground.style.top = buttonTop + 7858 + 450 + 290 + 915 + 915 + 915 + "px";
      }



      var rankNinetyOne = document.getElementById("communityRankNinetyOne");
      rankNinetyOne.style.display = 'block';

      var rankNinetyTwo = document.getElementById("communityRankNinetyTwo");
      rankNinetyTwo.style.display = 'block';

      var rankNinetyThree = document.getElementById("communityRankNinetyThree");
      rankNinetyThree.style.display = 'block';

      var rankNinetyFour = document.getElementById("communityRankNinetyFour");
      rankNinetyFour.style.display = 'block';

      var rankNinetyFive = document.getElementById("communityRankNinetyFive");
      rankNinetyFive.style.display = 'block';

      var rankNinetySix = document.getElementById("communityRankNinetySix");
      rankNinetySix.style.display = 'block';

      var rankNinetySeven = document.getElementById("communityRankNinetySeven");
      rankNinetySeven.style.display = 'block';

      var rankNinetyEight = document.getElementById("communityRankNinetyEight");
      rankNinetyEight.style.display = 'block';

      var rankNinetyNine = document.getElementById("communityRankNinetyNine");
      rankNinetyNine.style.display = 'block';

      var rankOneHundred = document.getElementById("communityRankOneHundred");
      rankOneHundred.style.display = 'block';

      var dividerNinetyOne = document.getElementById("communityGreyDividerNinetyOne");
      dividerNinetyOne.style.display = 'block';

      var dividerNinetyTwo = document.getElementById("communityGreyDividerNinetyTwo");
      dividerNinetyTwo.style.display = 'block';

      var dividerNinetyThree = document.getElementById("communityGreyDividerNinetyThree");
      dividerNinetyThree.style.display = 'block';

      var dividerNinetyFour = document.getElementById("communityGreyDividerNinetyFour");
      dividerNinetyFour.style.display = 'block';

      var dividerNinetyFive = document.getElementById("communityGreyDividerNinetyFive");
      dividerNinetyFive.style.display = 'block';

      var dividerNinetySix = document.getElementById("communityGreyDividerNinetySix");
      dividerNinetySix.style.display = 'block';

      var dividerNinetySeven = document.getElementById("communityGreyDividerNinetySeven");
      dividerNinetySeven.style.display = 'block';

      var dividerNinetyEight = document.getElementById("communityGreyDividerNinetyEight");
      dividerNinetyEight.style.display = 'block';

      var dividerNinetyNine = document.getElementById("communityGreyDividerNinetyNine");
      dividerNinetyNine.style.display = 'block';

      var dividerOneHundred = document.getElementById("communityGreyDividerOneHundred");
      dividerOneHundred.style.display = 'block';


      var commLoadMoreButton = document.getElementById("communityLoadMoreButton");
      commLoadMoreButton.style.display = 'none';

      break;

  }



});



var latestLoadMoreCounter = 0;

document.getElementById("latestLoadMoreButton").addEventListener("click", function(){
  latestLoadMoreCounter++;


  var latestBlock = document.getElementById("latestBlock");
  var latestBlockHeight = parseInt(window.getComputedStyle(latestBlock).height);

  latestBlock.style.height = (latestBlockHeight + 915) + "px";

  switch (latestLoadMoreCounter){

    case 1:
      var latestButtonCommunityBlock = document.getElementById("communityBlock");
      var communityBlockCurrentTop = parseInt(window.getComputedStyle(latestButtonCommunityBlock).top);


      var latestButtonFooterBlock = document.getElementById("footerBackground");
      var footerBlockCurrentTop = parseInt(window.getComputedStyle(latestButtonFooterBlock).top);

      var latestButton = document.getElementById("latestLoadMoreButton");
      var latestButtonTop = parseInt(window.getComputedStyle(latestButton).top);


      latestButtonCommunityBlock.style.top = (communityBlockCurrentTop + 915) + "px";
      latestButtonFooterBlock.style.top = (footerBlockCurrentTop + 915) + "px";
      latestButton.style.top = (latestButtonTop + 915) + "px";

      break;

    case 2:
      var latestButtonCommunityBlock = document.getElementById("communityBlock");
      var communityBlockCurrentTop = parseInt(window.getComputedStyle(latestButtonCommunityBlock).top);


      var latestButtonFooterBlock = document.getElementById("footerBackground");
      var footerBlockCurrentTop = parseInt(window.getComputedStyle(latestButtonFooterBlock).top);

      var latestButton = document.getElementById("latestLoadMoreButton");
      var latestButtonTop = parseInt(window.getComputedStyle(latestButton).top);
      latestButtonCommunityBlock.style.top = (communityBlockCurrentTop + 915) + "px";
      latestButtonFooterBlock.style.top = (footerBlockCurrentTop + 915) + "px";
      latestButton.style.top = (latestButtonTop + 915) + "px";


      break;

    case 3:
      var latestButtonCommunityBlock = document.getElementById("communityBlock");
      var communityBlockCurrentTop = parseInt(window.getComputedStyle(latestButtonCommunityBlock).top);


      var latestButtonFooterBlock = document.getElementById("footerBackground");
      var footerBlockCurrentTop = parseInt(window.getComputedStyle(latestButtonFooterBlock).top);

      var latestButton = document.getElementById("latestLoadMoreButton");
      var latestButtonTop = parseInt(window.getComputedStyle(latestButton).top);
      latestButtonCommunityBlock.style.top = (communityBlockCurrentTop + 915) + "px";
      latestButtonFooterBlock.style.top = (footerBlockCurrentTop + 915) + "px";
      latestButton.style.top = (latestButtonTop + 915) + "px";

      var latestLoadMoreButton = document.getElementById("latestLoadMoreButton");
      latestLoadMoreButton.style.display = 'none';


      break;

  }



});


var chartsLoadMoreCounter = 0;

document.getElementById("chartsLoadMoreButton").addEventListener("click", function(){
  chartsLoadMoreCounter++;

  var chartsList = document.getElementById("filteredList");
  var chartsListHeight = parseInt(window.getComputedStyle(chartsList).height);


  chartsList.style.height = (chartsListHeight + 800) + "px";

  switch (chartsLoadMoreCounter){

    case 1:

      var chartsLoadMoreButton = document.getElementById("chartsLoadMoreButton");
      var chartsLoadMoreButtonTop = parseInt(window.getComputedStyle(chartsLoadMoreButton).top);

      var chartsVideoBlock = document.getElementById("blackSpace");
      var chartsVideoBlockTop = parseInt(window.getComputedStyle(chartsVideoBlock).top);

      var chartsLatestBlock = document.getElementById("latestBlock");
      var chartsLatestBlockTop = parseInt(window.getComputedStyle(chartsLatestBlock).top);

      var chartsCommunityBlock = document.getElementById("communityBlock");
      var chartsCommunityBlockTop = parseInt(window.getComputedStyle(chartsCommunityBlock).top);

      var chartsFooterBlock = document.getElementById("footerBackground");
      var chartsFooterBlockTop = parseInt(window.getComputedStyle(chartsFooterBlock).top);


      chartsLoadMoreButton.style.top = (chartsLoadMoreButtonTop + 770) + "px";
      chartsVideoBlock.style.top = (chartsVideoBlockTop + 770) + "px";
      chartsLatestBlock.style.top = (chartsLatestBlockTop + 770) + "px";
      chartsCommunityBlock.style.top = (chartsCommunityBlockTop + 770) + "px";
      chartsFooterBlock.style.top = (chartsFooterBlockTop + 770) + "px";


      var dividerEleven = document.getElementById("chartsPlacementEleven");
      dividerEleven.style.display = "block";

      var dividerTwelve = document.getElementById("chartsPlacementTwelve");
      dividerTwelve.style.display = "block";

      var dividerThirteen = document.getElementById("chartsPlacementThirteen");
      dividerThirteen.style.display = "block";

      var dividerFourteen = document.getElementById("chartsPlacementFourteen");
      dividerFourteen.style.display = "block";

      var dividerFifteen = document.getElementById("chartsPlacementFifteen");
      dividerFifteen.style.display = "block";

      var dividerSixteen = document.getElementById("chartsPlacementSixteen");
      dividerSixteen.style.display = "block";

      var dividerSeventeen = document.getElementById("chartsPlacementSeventeen");
      dividerSeventeen.style.display = "block";

      var dividerEighteen = document.getElementById("chartsPlacementEighteen");
      dividerEighteen.style.display = "block";

      var dividerNineteen = document.getElementById("chartsPlacementNineteen");
      dividerNineteen.style.display = "block";

      var dividerTwenty = document.getElementById("chartsPlacementTwenty");
      dividerTwenty.style.display = "block";






      var chartsEleven = document.getElementById("meow1");
      chartsEleven.style.display = 'block'; // This will make it visible again

      var chartsTwelve = document.getElementById("meow2");
      chartsTwelve.style.display = 'block';

      var chartsThirteen = document.getElementById("meow3");
      chartsThirteen.style.display = 'block';

      var chartsFourteen = document.getElementById("meow4");
      chartsFourteen.style.display = 'block';

      var chartsFifteen = document.getElementById("meow5");
      chartsFifteen.style.display = 'block';

      var chartsSixteen = document.getElementById("meow6");
      chartsSixteen.style.display = 'block';

      var chartsSeventeen = document.getElementById("meow7");
      chartsSeventeen.style.display = 'block';

      var chartsEighteen = document.getElementById("meow8");
      chartsEighteen.style.display = 'block';

      var chartsNineteen = document.getElementById("meow9");
      chartsNineteen.style.display = 'block';

      var chartsTwenty = document.getElementById("meow10");
      chartsTwenty.style.display = 'block';







      break;

    case 2:

      var chartsLoadMoreButton = document.getElementById("chartsLoadMoreButton");
      var chartsLoadMoreButtonTop = parseInt(window.getComputedStyle(chartsLoadMoreButton).top);

      var chartsVideoBlock = document.getElementById("blackSpace");
      var chartsVideoBlockTop = parseInt(window.getComputedStyle(chartsVideoBlock).top);

      var chartsLatestBlock = document.getElementById("latestBlock");
      var chartsLatestBlockTop = parseInt(window.getComputedStyle(chartsLatestBlock).top);

      var chartsCommunityBlock = document.getElementById("communityBlock");
      var chartsCommunityBlockTop = parseInt(window.getComputedStyle(chartsCommunityBlock).top);

      var chartsFooterBlock = document.getElementById("footerBackground");
      var chartsFooterBlockTop = parseInt(window.getComputedStyle(chartsFooterBlock).top);


      chartsLoadMoreButton.style.top = (chartsLoadMoreButtonTop + 770) + "px";
      chartsVideoBlock.style.top = (chartsVideoBlockTop + 770) + "px";
      chartsLatestBlock.style.top = (chartsLatestBlockTop + 770) + "px";
      chartsCommunityBlock.style.top = (chartsCommunityBlockTop + 770) + "px";
      chartsFooterBlock.style.top = (chartsFooterBlockTop + 770) + "px";



      var dividerTwentyOne = document.getElementById("chartsPlacementTwentyOne");
      dividerTwentyOne.style.display = "block";

      var dividerTwentyTwo = document.getElementById("chartsPlacementTwentyTwo");
      dividerTwentyTwo.style.display = "block";

      var dividerTwentyThree = document.getElementById("chartsPlacementTwentyThree");
      dividerTwentyThree.style.display = "block";

      var dividerTwentyFour = document.getElementById("chartsPlacementTwentyFour");
      dividerTwentyFour.style.display = "block";

      var dividerTwentyFive = document.getElementById("chartsPlacementTwentyFive");
      dividerTwentyFive.style.display = "block";

      var dividerTwentySix = document.getElementById("chartsPlacementTwentySix");
      dividerTwentySix.style.display = "block";

      var dividerTwentySeven = document.getElementById("chartsPlacementTwentySeven");
      dividerTwentySeven.style.display = "block";

      var dividerTwentyEight = document.getElementById("chartsPlacementTwentyEight");
      dividerTwentyEight.style.display = "block";

      var dividerTwentyNine = document.getElementById("chartsPlacementTwentyNine");
      dividerTwentyNine.style.display = "block";

      var dividerThirty = document.getElementById("chartsPlacementThirty");
      dividerThirty.style.display = "block";


      var chartsTwentyOne = document.getElementById("meow11");
      chartsTwentyOne.style.display = 'block'; // This will make it visible again

      var chartsTwentyTwo = document.getElementById("meow12");
      chartsTwentyTwo.style.display = 'block';

      var chartsTwentyThree = document.getElementById("meow13");
      chartsTwentyThree.style.display = 'block';

      var chartsTwentyFour = document.getElementById("meow14");
      chartsTwentyFour.style.display = 'block';

      var chartsTwentyFive = document.getElementById("meow15");
      chartsTwentyFive.style.display = 'block';

      var chartsTwentySix = document.getElementById("meow16");
      chartsTwentySix.style.display = 'block';

      var chartsTwentySeven = document.getElementById("meow17");
      chartsTwentySeven.style.display = 'block';

      var chartsTwentyEight = document.getElementById("meow18");
      chartsTwentyEight.style.display = 'block';

      var chartsTwentyNine = document.getElementById("meow19");
      chartsTwentyNine.style.display = 'block';

      var chartsThirty = document.getElementById("meow20");
      chartsThirty.style.display = 'block';




      break;

    case 3:

      var chartsLoadMoreButton = document.getElementById("chartsLoadMoreButton");
      var chartsLoadMoreButtonTop = parseInt(window.getComputedStyle(chartsLoadMoreButton).top);

      var chartsVideoBlock = document.getElementById("blackSpace");
      var chartsVideoBlockTop = parseInt(window.getComputedStyle(chartsVideoBlock).top);

      var chartsLatestBlock = document.getElementById("latestBlock");
      var chartsLatestBlockTop = parseInt(window.getComputedStyle(chartsLatestBlock).top);

      var chartsCommunityBlock = document.getElementById("communityBlock");
      var chartsCommunityBlockTop = parseInt(window.getComputedStyle(chartsCommunityBlock).top);

      var chartsFooterBlock = document.getElementById("footerBackground");
      var chartsFooterBlockTop = parseInt(window.getComputedStyle(chartsFooterBlock).top);


      chartsLoadMoreButton.style.top = (chartsLoadMoreButtonTop + 770) + "px";
      chartsVideoBlock.style.top = (chartsVideoBlockTop + 770) + "px";
      chartsLatestBlock.style.top = (chartsLatestBlockTop + 770) + "px";
      chartsCommunityBlock.style.top = (chartsCommunityBlockTop + 770) + "px";
      chartsFooterBlock.style.top = (chartsFooterBlockTop + 770) + "px";

      var dividerThirtyOne = document.getElementById("chartsPlacementThirtyOne");
      dividerThirtyOne.style.display = "block";

      var dividerThirtyTwo = document.getElementById("chartsPlacementThirtyTwo");
      dividerThirtyTwo.style.display = "block";

      var dividerThirtyThree = document.getElementById("chartsPlacementThirtyThree");
      dividerThirtyThree.style.display = "block";

      var dividerThirtyFour = document.getElementById("chartsPlacementThirtyFour");
      dividerThirtyFour.style.display = "block";

      var dividerThirtyFive = document.getElementById("chartsPlacementThirtyFive");
      dividerThirtyFive.style.display = "block";

      var dividerThirtySix = document.getElementById("chartsPlacementThirtySix");
      dividerThirtySix.style.display = "block";

      var dividerThirtySeven = document.getElementById("chartsPlacementThirtySeven");
      dividerThirtySeven.style.display = "block";

      var dividerThirtyEight = document.getElementById("chartsPlacementThirtyEight");
      dividerThirtyEight.style.display = "block";

      var dividerThirtyNine = document.getElementById("chartsPlacementThirtyNine");
      dividerThirtyNine.style.display = "block";

      var dividerForty = document.getElementById("chartsPlacementForty");
      dividerForty.style.display = "block";

      var chartsThirtyOne = document.getElementById("meow21");
      chartsThirtyOne.style.display = 'block';

      var chartsThirtyTwo = document.getElementById("meow22");
      chartsThirtyTwo.style.display = 'block';

      var chartsThirtyThree = document.getElementById("meow23");
      chartsThirtyThree.style.display = 'block';

      var chartsThirtyFour = document.getElementById("meow24");
      chartsThirtyFour.style.display = 'block';

      var chartsThirtyFive = document.getElementById("meow25");
      chartsThirtyFive.style.display = 'block';

      var chartsThirtySix = document.getElementById("meow26");
      chartsThirtySix.style.display = 'block';

      var chartsThirtySeven = document.getElementById("meow27");
      chartsThirtySeven.style.display = 'block';

      var chartsThirtyEight = document.getElementById("meow28");
      chartsThirtyEight.style.display = 'block';

      var chartsThirtyNine = document.getElementById("meow29");
      chartsThirtyNine.style.display = 'block';

      var chartsForty = document.getElementById("meow30");
      chartsForty.style.display = 'block';



      break;

    case 4:

      var chartsLoadMoreButton = document.getElementById("chartsLoadMoreButton");
      var chartsLoadMoreButtonTop = parseInt(window.getComputedStyle(chartsLoadMoreButton).top);

      var chartsVideoBlock = document.getElementById("blackSpace");
      var chartsVideoBlockTop = parseInt(window.getComputedStyle(chartsVideoBlock).top);

      var chartsLatestBlock = document.getElementById("latestBlock");
      var chartsLatestBlockTop = parseInt(window.getComputedStyle(chartsLatestBlock).top);

      var chartsCommunityBlock = document.getElementById("communityBlock");
      var chartsCommunityBlockTop = parseInt(window.getComputedStyle(chartsCommunityBlock).top);

      var chartsFooterBlock = document.getElementById("footerBackground");
      var chartsFooterBlockTop = parseInt(window.getComputedStyle(chartsFooterBlock).top);


      chartsLoadMoreButton.style.top = (chartsLoadMoreButtonTop + 770) + "px";
      chartsVideoBlock.style.top = (chartsVideoBlockTop + 770) + "px";
      chartsLatestBlock.style.top = (chartsLatestBlockTop + 770) + "px";
      chartsCommunityBlock.style.top = (chartsCommunityBlockTop + 770) + "px";
      chartsFooterBlock.style.top = (chartsFooterBlockTop + 770) + "px";


      var dividerFortyOne = document.getElementById("chartsPlacementFortyOne");
      dividerFortyOne.style.display = "block";

      var dividerFortyTwo = document.getElementById("chartsPlacementFortyTwo");
      dividerFortyTwo.style.display = "block";

      var dividerFortyThree = document.getElementById("chartsPlacementFortyThree");
      dividerFortyThree.style.display = "block";

      var dividerFortyFour = document.getElementById("chartsPlacementFortyFour");
      dividerFortyFour.style.display = "block";

      var dividerFortyFive = document.getElementById("chartsPlacementFortyFive");
      dividerFortyFive.style.display = "block";

      var dividerFortySix = document.getElementById("chartsPlacementFortySix");
      dividerFortySix.style.display = "block";

      var dividerFortySeven = document.getElementById("chartsPlacementFortySeven");
      dividerFortySeven.style.display = "block";

      var dividerFortyEight = document.getElementById("chartsPlacementFortyEight");
      dividerFortyEight.style.display = "block";

      var dividerFortyNine = document.getElementById("chartsPlacementFortyNine");
      dividerFortyNine.style.display = "block";

      var dividerFifty = document.getElementById("chartsPlacementFifty");
      dividerFifty.style.display = "block";


      var chartsFortyOne = document.getElementById("meow31");
      chartsFortyOne.style.display = 'block';

      var chartsFortyTwo = document.getElementById("meow32");
      chartsFortyTwo.style.display = 'block';

      var chartsFortyThree = document.getElementById("meow33");
      chartsFortyThree.style.display = 'block';

      var chartsFortyFour = document.getElementById("meow34");
      chartsFortyFour.style.display = 'block';

      var chartsFortyFive = document.getElementById("meow35");
      chartsFortyFive.style.display = 'block';

      var chartsFortySix = document.getElementById("meow36");
      chartsFortySix.style.display = 'block';

      var chartsFortySeven = document.getElementById("meow37");
      chartsFortySeven.style.display = 'block';

      var chartsFortyEight = document.getElementById("meow38");
      chartsFortyEight.style.display = 'block';

      var chartsFortyNine = document.getElementById("meow39");
      chartsFortyNine.style.display = 'block';

      var chartsFifty = document.getElementById("meow40");
      chartsFifty.style.display = 'block';


      var chartsLoadMoreButton = document.getElementById("chartsLoadMoreButton");
      chartsLoadMoreButton.style.display = 'none';

      break;





  }



});







var buttonJoinCommunity = document.getElementById("communityJoinOurCommunityButton")
buttonJoinCommunity.addEventListener("click", function () {

  var urlJoinCommunity = "https://genius.com/signup";
  window.location.href = urlJoinCommunity;

});


var buttonLearnHowGeniusWorks = document.getElementById("communityLearnHowGeniusWorksButton")
buttonLearnHowGeniusWorks.addEventListener("click", function (){

  var urlLearnGenius = "https://genius.com/Genius-how-genius-works-annotated";
  window.location.href = urlLearnGenius;

});
var dropdownContent = document.getElementById('dropdown-content');
dropdownContent.style.display = 'none';


var isDropdownOpen = false;

document.addEventListener('click', function(event) {
  var dropdownButton = document.querySelector('.large-button');
  var dropdownContent = document.getElementById('dropdown-content');
  var arrow = document.getElementById('directionalArrow');

  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target) && isDropdownOpen) {
    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('button-transition');
    dropdownButton.classList.add('button-undoTransition');

    // Check if the dropdown is open, if it is, we flip the arrow back
    if (arrow.classList.contains('flipped')) {
      arrow.classList.remove('flipped');
    }

    isDropdownOpen = false;
  }
});

function toggleDropdown() {
  const dropdownButton = document.querySelector('.large-button');
  const dropdownContent = document.getElementById('dropdown-content');
  var arrow = document.getElementById('directionalArrow');

  if (dropdownContent.style.height !== '0px') {
    dropdownContent.style.height = '0px';
    dropdownButton.classList.remove('expanded');
    isDropdownOpen = false;

    // Check if the dropdown is open, if it is, we flip the arrow back
    if (arrow.classList.contains('flipped')) {
      arrow.classList.remove('flipped');
    }
  } else {
    const button = document.querySelector('.large-button');

    // Add classes for adjusting widths before expanding dropdown
    if (selectedTime === 'today') {
      button.classList.add("width-today");
      dropdownContent.classList.add('dropdown-today');
    } else if (selectedTime === 'week') {
      button.classList.add("width-week");
      dropdownContent.classList.add('dropdown-week');
    } else if (selectedTime === 'month') {
      button.classList.add("width-month");
      dropdownContent.classList.add('dropdown-month');
    } else if (selectedTime === 'allTime') {
      button.classList.add("width-allTime");
    }

    dropdownContent.style.display = 'flex';
    dropdownButton.classList.add('expanded'); // Adjust width to 320px

    // Force a reflow before applying transition class
    void dropdownContent.offsetWidth;

    setTimeout(() => {
      dropdownContent.style.transition = 'height 0.1s ease';
      dropdownContent.style.transform = 'translateY(-10px)';
      dropdownContent.style.height = '265px';
    }, 100); // Delay showing the dropdown content and adjusting height

    isDropdownOpen = true;
    arrow.classList.add('flipped');
  }

  updateButtonText();
}





const songData = [

  <!-- Songs / All Genres / Today  -->
  {id: 'one', rank: "1", artist: "¥$, Kanye West, Ty D...", type: 'songs', genre: 'all', time: "today", title: 'CARNIVAL', image: 'https://images.genius.com/417e5b985d42ee571934985d7904b63b.300x300x1.png', url: 'https://genius.com/Kali-area-codes-lyrics'},
  {id: 'two', rank: "2", artist: "Cigarettes After Sex", type: 'songs', genre: 'all', time: "today", title: 'Tejano Blue', image: 'https://images.genius.com/ff720a24e70619755c2ae2536d888413.300x300x1.png', url: 'https://genius.com/Fifty-fifty-cupid-twin-version-lyrics'},
  {id: 'three', rank: "3", artist: "Lazza", type: 'songs', genre: 'all', time: "today", title: '100 MESSAGGI', image: 'https://images.genius.com/b852d016373114a37d6a562ff097b8ad.300x300x1.png', url: 'https://genius.com/Lil-durk-all-my-life-lyrics'},
  {id: 'four', rank: "4", artist: "Eminem", type: 'songs', genre: 'all', time: "today", title: 'Mockingbird', image: 'https://images.genius.com/481d2a614d302cd50d06082bea096266.300x300x1.png', url: 'https://genius.com/Genius-english-translations-kaarija-cha-cha-cha-english-translation-lyrics'},
  {id: 'five', rank: "5", artist: "Noel5ive", type: 'songs', genre: 'all', time: "today", title: 'GTA', image: 'https://images.genius.com/0a9e0c89530c940109616909a5ba8f5a.300x300x1.jpg', url: 'https://genius.com/Genius-english-translations-fifty-fifty-cupid-english-translation-lyrics'},
  {id: 'six', rank: "6", artist: "Eminem", type: 'songs', genre: 'all', time: "today", title: 'Without Me', image: 'https://images.genius.com/d97224e10b88dcd05ed18b87366461c8.300x300x1.jpg', url: 'https://genius.com/Lil-mabu-mathematical-disrespect-lyrics'},
  {id: 'seven', rank: "7", artist: "Eminem", type: 'songs', genre: 'all', time: "today", title: 'The Real Slim Shady', image: 'https://images.genius.com/18d65c99cffe8073c7ae92592ed2d2e2.300x256x1.jpg', url: 'https://genius.com/Genius-romanizations-yoasobi-idol-romanized-lyrics'},
  {id: 'eight', rank: "8", artist: "One Direction", type: 'songs', genre: 'all', time: "today", title: 'What Makes You Beautiful', image: 'https://images.genius.com/ddd26dfd51f3ffe53a8f3422543c9103.300x300x1.png', url: 'https://genius.com/Genius-english-translations-gi-dle-queencard-english-translation-lyrics'},
  {id: 'nine', rank: "9", artist: "¥$, Kanye West, Ty D...", type: 'songs', genre: 'all', time: "today", title: 'BACK TO ME', image: 'https://images.genius.com/5f9a010dd8b351b82c9340044228bd8d.300x300x1.png', url: 'https://genius.com/Rockstar-mahal-pa-rin-kita-lyrics'},
  {id: 'ten', rank: "10", artist: "SZA", type: 'songs', genre: 'all', time: "today", title: 'Saturn', image: 'https://images.genius.com/cdde0c68e0ae65fc0f529535e192ebee.300x300x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},




  {id: 'meow1', rank: "11", artist: "Eminem", type: 'songs', genre: 'all', time: "today", title: 'Lose Yourself', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fce61c1b2664c5952984e30f9b59f1346.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow2', rank: "12", artist: "Bruno Mars", type: 'songs', genre: 'all', time: "today", title: 'When I Was Your Man', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F2e1e1ea46235d86a0ba541a1c30b3397.1000x1000x1.jpg', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow3', rank: "13", artist: "Eminem", type: 'songs', genre: 'all', time: "today", title: 'Stan', image: 'https://t2.genius.com/unsafe/168x168/https%3A%2F%2Fimages.genius.com%2Fd4144df8656805edbed2dac3a7524368.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow4', rank: "14", artist: "Genius Romanizations", type: 'songs', genre: 'all', time: "today", title: 'Anuv Jain - Husn (Romanized)', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F90c97ac6e4964237bcf038e2053f6b96.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow5', rank: "15", artist: "Genius Romanizations", type: 'songs', genre: 'all', time: "today", title: 'Creepy Nuts - Bling-Bang-B...', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F5b2054abdc05bc8561c20ddc069a01f2.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow6', rank: "16", artist: "Andrew Underberg, S...", type: 'songs', genre: 'all', time: "today", title: 'You Didn\'t Know', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F4d35ab85eec40ea65ea65dc1b7994fb3.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow7', rank: "17", artist: "Backstreet Boys", type: 'songs', genre: 'all', time: "today", title: 'I Want It That Way', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F6b49d0065d36552377a5ffb23f0bcf43.600x600x1.jpg', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow8', rank: "18", artist: "Knocked Loose", type: 'songs', genre: 'all', time: "today", title: 'Blinding Faith', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F122de83307c6cfee5648f20871cd6c74.1000x1000x1.jpg', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow9', rank: "19", artist: "Teddy Swims", type: 'songs', genre: 'all', time: "today", title: 'Lose Control', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Ffcf311f11df1fdb278405f64494cdc39.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow10', rank: "20", artist: "Breskvica", type: 'songs', genre: 'all', time: "today", title: 'Gnezdo orlovo', image: 'https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fd7567654b4d60cd3f53e50cb8ff7e9de.1000x1000x1.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow11', rank: "21", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow12', rank: "22", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow13', rank: "23", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow14', rank: "24", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow15', rank: "25", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow16', rank: "26", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow17', rank: "27", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow18', rank: "28", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow19', rank: "29", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow20', rank: "30", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow21', rank: "31", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow22', rank: "32", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow23', rank: "33", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow24', rank: "34", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow25', rank: "35", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow26', rank: "36", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow27', rank: "37", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow28', rank: "38", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow29', rank: "39", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow30', rank: "40", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow31', rank: "41", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow32', rank: "42", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow33', rank: "43", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow34', rank: "44", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow35', rank: "45", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow36', rank: "46", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow37', rank: "47", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow38', rank: "48", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow39', rank: "49", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},
  {id: 'meow40', rank: "50", artist: "Foo Fighters", type: 'songs', genre: 'all', time: "today", title: 'Under You', image: 'UnderYou.png', url: 'https://genius.com/Foo-fighters-under-you-lyrics'},





  <!-- Songs / All Genres / All-Time  -->
  {id: 'allmyLifeALLTIME', type: 'songs', genre: 'all', time: "all", title: 'All My Life', image: 'AllMyLife.png'},




];




let selectedType = 'songs';
let selectedGenre = 'all';
let selectedTime = 'today';
filterItems('type', selectedType);
filterItems('genre', selectedGenre);
filterItems('time', selectedTime);

function updateButtonText() {
  let genreText = selectedGenre.toUpperCase();
  let dateText = selectedTime.toUpperCase();

  if (selectedGenre === 'all'){
    genreText = "ALL GENRES"
  }

  if (selectedTime === 'week'){
    dateText = "THIS WEEK";
  } else if (selectedTime === 'month'){
    dateText = "THIS MONTH";
  } else if (selectedTime === "allTime"){
    dateText = "ALL TIME";
  }

  const buttonText = `${selectedType.toUpperCase()} / ${dateText}`;

  // Modify the button text content based on the selected type
  const button = document.querySelector('.large-button');
  if (selectedType === 'albums' || selectedType === 'artists' || selectedType === 'lyrics') {
    button.textContent = buttonText;
  } else {
    button.textContent = `${selectedType.toUpperCase()} / ${genreText} / ${dateText}`;
  }
}

function filterItems(category, value) {
  const button = document.querySelector('.large-button');
  const dropdown = document.querySelector('.dropdown-content');

  if (category === 'type') {
    selectedType = value;

    // Hide the "Genre" column if "Artists" is selected
    const genreColumn = document.querySelector('.dropdown-column2');
    if (selectedType === 'albums' || selectedType === 'artists' || selectedType === 'lyrics') {
      genreColumn.style.display = 'none';
    } else {
      genreColumn.style.display = 'block';
    }
  } else if (category === 'genre') {
    selectedGenre = value;
  } else if (category === 'time') {
    selectedTime = value;


    button.classList.remove("expanded", "width-today", "width-week", "width-month", "width-allTime", "dropdown-today", "dropdown-week", "dropdown-month", "width-TEST", );

    if(value === 'today'){
      button.classList.add("width-today")
      dropdown.classList.add('dropdown-today')
      dropdown.classList.remove('dropdown-week')
      dropdown.classList.remove('dropdown-month')
    }
    else if(value === 'week'){
      button.classList.add("width-week");
      dropdown.classList.add('dropdown-week')
      dropdown.classList.remove('dropdown-today')
      dropdown.classList.remove('dropdown-month')
    }
    else if(value === 'month'){
      button.classList.add("width-month");
      dropdown.classList.add('dropdown-month')
      dropdown.classList.remove('dropdown-today')
      dropdown.classList.remove('dropdown-week')
    }
    else if(value === 'allTime' && selectedType === 'lyrics'){
      button.classList.add("width-TEST");
    }
    else if (value === 'allTime'){
      button.classList.add("width-allTime");
      dropdown.classList.add('dropdown-allTime')
      dropdown.classList.remove('dropdown-today')
      dropdown.classList.remove('dropdown-week')
      dropdown.classList.remove('dropdown-month')
    }


  }







  updateDropdownSelection(category, value);
  updateButtonText();


  const filteredItems = songData.filter(item => {
    return item.type === selectedType && item.genre === selectedGenre && item.time === selectedTime;
  });

  const filteredList  = document.getElementById('filteredList');
  filteredList.innerHTML = '';

  filteredItems.forEach(item => {
    const listItem = document.createElement('div');
    listItem.className = 'item';
    listItem.id = item.id; // Set the id attribute to the value of the id property

    const link = document.createElement('a');
    link.href = item.url; // Set the href attribute to the item's URL
    link.className = 'item-link'; // Add the class "item-link" to the link element
    listItem.appendChild(link);

    // Create an <img> element
    const image = document.createElement('img');
    image.src = item.image; // Set the src attribute to the image URL
    listItem.appendChild(image);

    // Create a <p> element for displaying the type and title
    const titleElement = document.createElement('p');
    titleElement.textContent = `${item.title}`;
    link.appendChild(titleElement); // Append the title to the link element

    // Create additional div elements
    const additionalDiv1 = document.createElement('div');
    additionalDiv1.className = 'additional-div-1';
    additionalDiv1.id = `${item.id}` + 'Additional-div-1';
    additionalDiv1.textContent = `${item.artist}`;
    link.appendChild(additionalDiv1);

    const additionalDiv2 = document.createElement('div');
    additionalDiv2.className = 'additional-div-2';
    additionalDiv2.id = `${item.id}` + 'Additional-div-2';
    additionalDiv2.textContent = `${item.rank}`;
    link.appendChild(additionalDiv2);


    filteredList.appendChild(listItem);
  });
  // Rerender the list after updating the selected values
  if (category && value) {
    filterItems();
  }
  var dropdownButton = document.querySelector('.large-button');
  var dropdownContent = document.getElementById('dropdown-content');
  var arrow = document.getElementById('directionalArrow');

  if (dropdownContent.style.display === 'flex') {
    dropdownContent.style.display = 'none';
    dropdownButton.classList.remove('button-transition');
    dropdownButton.classList.add('button-undoTransition');
    isDropdownOpen = false;

    if (arrow.classList.contains('flipped')) {
      arrow.classList.remove('flipped');
    }
  }
}

function updateDropdownSelection(category, value) {
  const dropdownCategory = document.querySelectorAll(`.dropdown-${category}`);
  dropdownCategory.forEach(option => {
    if (option.getAttribute('data-value') === value) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
}

document.getElementById('typeFilter').addEventListener('change', filterItems);
document.getElementById('genreFilter').addEventListener('change', filterItems);
document.getElementById('timeFilter').addEventListener('change', filterItems);

filterItems();





function redirectToSignUp() {
  window.location.href = "https://genius.com/signup";
}

function redirectToSignIn() {
  window.location.href = "https://genius.com/login";
}

function redirectToHome() {
  window.location.href = "https://genius.com";
}

function redirectToMainNewsArticle() {
  window.location.href = "https://genius.com/a/cigarettes-after-sex-nod-to-their-texas-roots-with-new-song-tejano-blue";
}

