$(function(){
//검색
$('.search-select').click(function(e){
    e.preventDefault();
    //search-sbox의 display 값을 받아다가 변수 dp에 저장한다.
    const dp = $('.search-sbox').css("display");
    //dp 값이 none일때와 block일때를 구분한다.
    if(dp == "none"){
        //none이라면 아래 화살표를 지우고 위에 화살표를 넣는다.
        $('.selectbox').find('.fa-solid').removeClass('fa-angle-down').addClass('fa-angle-up');
        //search-sbox를 display block로 바꾼다.
        $('.search-sbox').show();
    }else{
        //none과 반대의 처리를 한다.
        $('.selectbox').find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
        $('.search-sbox').hide();
    }
  });

  $('.search-sbox>a').click(function(e){
    e.preventDefault();
    const txt = $(this).text();
    $('.search-select').text(txt);
    $('.search-sbox').hide();
    $('.selectbox').find('.fa-solid').removeClass('fa-angle-up').addClass('fa-angle-down');
    $('#selectbox').val(txt);
    $('#searchtext').focus;


  });

  $('.hero li').mouseenter(function(){
    $('.hero li').removeClass('active');
    $(this).addClass('active');
  });


  //slide show
  setInterval(mySlide, 10000);

  //chevron

  $('.prev').click(function(
    
  ));

});//jquery

function mySlide(){
  const eq0 = $('.hero .new:eq(0)'); // 최초로 보이는 new
  const eq1 = $('.hero .new:eq(1)'); // 그 뒤에 숨어 있는 new
  //animate를 통해 두번째 new에 zindex를 추가하여 제일 앞에 보이게 하고 투명처리 한 후 점차 진하게 보이게 한다.
  eq1.addClass('zindex').css('opacity',0).animate({
    'opacity':1
  },500, function(){
    //animate작업이 끝나면 이전에 보였던 new의 zindex를 지우고 가장 나중으로 바꿔준다.
    eq1.find('li').eq(ranDomList()).addClass('active');
    eq0.removeClass('zindex');
    eq0.find('li').removeClass('active');
    $('.hero').append(eq0);
  });
}

function ranDomList(){
  return Math.floor(Math.random() * 4);
}