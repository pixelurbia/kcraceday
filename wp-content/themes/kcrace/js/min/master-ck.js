$(window).load(function(){$("body").fadeIn(100)}),$(document).ready(function(){function e(){$(".cal-c .adate").each(function(e){var t=$("#month-select").val(),a=$("#year-select").val();$(this).find("i").html(t),$(this).find("p").html(a)})}function t(){var e=$("#city-select option:selected").val();$(".dateitem").hasClass(e)?($(".dateitem").hide(),$("."+e).show()):99==e?$(".dateitem").show():$(".dateitem").hide(),$(".cal-list a").hasClass(e)?($(".cal-list a").hide(),$("."+e).show()):99==e?$(".cal-list a").show():$(".cal-list a").hide()}function a(){$(".adate").hasClass("seconddate")?$("#gform_next_button_1_7").show():$("#gform_next_button_1_7").hide()}function l(){var e=$(".today .month").html(),t=$(".today .year").html(),a=$(".today .day").html();$("#startdate li .month").html(e),$("#startdate li .year").html(t),$("#startdate li .day").html(a)}function n(){var e=$(".seconddate .month").html(),t=$(".seconddate .year").html(),a=$(".seconddate .day").html();$("#enddate li .month").html(e),$("#enddate li .year").html(t),$("#enddate li .day").html(a),$("#enddate li").addClass("seconddate")}function s(){var e=$("#startdate  .month").html(),t=$("#enddate  .month").html(),a=$("#startdate  .year").html(),l=$("#enddate .year").html(),n=$("#startdate  .day").html(),s=$("#enddate  .day").html(),c=e+a,o=t+l,i=$("#month-select").val(),d=$("#year-select").val(),r=i+d;o==r&&$(".adate .day").filter(function(){return $(this).html()==s}).parent().addClass("seconddate")}function c(){var e=$("#month-select option:selected").text(),t=$("#year-select option:selected").text();$(".monthname").text(e),$(".yearname").text(t)}function o(){var e=$("#startdate .month").html(),t=$("#startdate .year").html(),a=$("#startdate .day").html(),l=e+"/"+a+"/"+t,n=$(".seconddate .month").html(),s=$(".seconddate .year").html(),c=$(".seconddate .day").html(),o=n+"/"+c+"/"+s,i=new Date(l),d=new Date(o),r=Math.abs(d.getTime()-i.getTime()),h=Math.ceil(r/864e5);console.log(h),30>=h?($(".ginput_total.ginput_total_1").html("$300.00"),$("#input_1_60").val("$300.00")):59>=h?($(".ginput_total.ginput_total_1").html("$200.00"),$("#input_1_60").val("$200.00")):89>=h?($(".ginput_total.ginput_total_1").html("$150.00"),$("#input_1_60").val("$150.00")):h>=90&&($(".ginput_total.ginput_total_1").html("$100.00"),$("#input_1_60").val("$100.00"))}function i(e){d($(e).html())}function d(e){var t=window.open("","my div","height=400,width=600");return t.document.write("<html><head><title>my div</title>"),t.document.write("</head><body >"),t.document.write(e),t.document.write("</body></html>"),t.print(),t.close(),!0}function r(){window.location=h()}function h(e){var t=document.getElementById("month-select").value,a=document.getElementById("year-select").value;return"next"==e?12==t?(t=1,a++):t++:"prev"==e&&(1==t?(t=12,a--):t--),"?calmonth="+t+"&calyear="+a}$("body").css("background-size","cover"),"block"==$("#phonedummy").css("display")&&$("#menu-item-85 a").attr("href","/event-list"),$("#gform_wrapper_1").before('<div class="btn alertmobile">If you are on a mobile device and are unable to upload the proper files, you can continue your application after submission by clicking the "Already have an approved race date?" button on the application page.</div>'),$(".fancybox").fancybox(),$(".readmore").fancybox({maxWidth:"95%",maxHeight:"95%",fitToView:!1,autoSize:!1,openEffect:"elastic",closeEffect:"elastic"}),e(),$("#city-select").change(function(){t(),console.log("it changed")}),l(),$("body").on("click",".adate",function(){var e=$("#month-select").val(),t=$("#year-select").val(),l=$("#startdate .month").html(),s=$("#startdate .year").html(),c=$("#startdate .day").html(),i=$(this).find("span").html();selday=parseInt(i),curmo=parseInt(l),console.log(e+"the month selected"),console.log(t+"year selected"),console.log(curmo+"current month"),console.log(s+"current year"),console.log(c+"current day"),console.log(selday+"selected day"),t>s?(console.log("year is greater than current"),$(this).hasClass("today")||($(".adate").removeClass("seconddate"),$(this).addClass("seconddate"),o(),n(),a())):(t=s)&&(console.log("year is current year"),e>curmo?(console.log("month is greater than current"),$(this).hasClass("today")||($(".adate").removeClass("seconddate"),$(this).addClass("seconddate"),o(),n(),a())):e==curmo&&(console.log("month is current"),selday>=c&&(console.log("day is okay"),$(this).hasClass("today")||($(".adate").removeClass("seconddate"),$(this).addClass("seconddate"),o(),n(),a()))))}),a(),c();var m=$(".cal-c").parent().html();$("#field_1_58").after(m),$("body").on("click","#fieldNext",function(t){t.preventDefault(),$(".cal-c.calapply").addClass("loading");var a=$("#month-select").val(),l=parseInt(a)+1,n=$("#year-select").val();if(l>12)var o=parseInt(n)+1,l=1;else var o=parseInt(n);console.log(l),console.log(o),$.ajax({url:"/app-calendar?calmonth="+l+"&calyear="+o,success:function(t){$(".calapply").html(t),$(".calapply").removeClass("loading"),c(),e(),s()}})}),$("body").on("click","#fieldPrev",function(t){t.preventDefault(),$(".cal-c.calapply").addClass("loading");var a=$("#month-select").val(),l=parseInt(a)-1,n=$("#year-select").val();if(1>l)var o=parseInt(n)-1,l=12;else var o=parseInt(n);console.log(l),console.log(o),$.ajax({url:"/app-calendar?calmonth="+l+"&calyear="+o,success:function(t){$(".calapply").html(t).show(),$(".calapply").removeClass("loading"),c(),e(),s()}})}),$("#gf_step_1_3").after('<div id="gf_step_1_4" class="gf_step gf_step_last gf_step_pending"><span class="gf_step_number">3</span>&nbsp;Finish</div>'),$("#input_1_87").keyup(function(){var e=$(this).val();console.log(e)}),$(".menu-item-18").click(function(e){e.preventDefault(),$(".menu-item-18 a").fadeOut("slow"),$(".searchform").fadeIn("slow"),$("#menu-item-18").css("background-color","#f4945c")}),$(".menu-item-18 a").click(function(e){e.preventDefault(),$(".menu-item-18 a").fadeOut("slow"),$(".searchform").fadeIn("slow"),$("#menu-item-18").css("background-color","#f4945c")}),$("input").change(function(){$(this).css("color","#205c75")}),$("textarea").change(function(){$(this).css("color","#205c75")}),$("select").change(function(){$(this).css("color","#205c75")}),$(".gf_step a").click(function(e){e.preventDefault()}),$("#field_1_61 select option").removeAttr("selected","selected"),$(".credit").click(function(){$("#field_1_61 select option").removeAttr("selected","selected"),$("#field_1_61 select").val("2"),$("#field_1_61 select option[value=2]").attr("selected","selected"),$("#field_1_61 select").change(),$(".btn").removeClass("btnselect"),$(this).addClass("btnselect")}),$(".check").click(function(){$("#field_1_61 select option").removeAttr("selected","selected"),$("#field_1_61 select").val("3"),$("#field_1_61 select option[value=3]").attr("selected","selected"),$("#field_1_61 select").change(),$(".btn").removeClass("btnselect"),$(this).addClass("btnselect")}),$(".walkbike").click(function(){$("#field_1_61 select option").removeAttr("selected","selected"),$("#field_1_61 select").val("4"),$("#field_1_61 select option[value=4]").attr("selected","selected"),$("#field_1_61 select").change(),$(".btn").removeClass("btnselect"),$(this).addClass("btnselect")}),$("#printbtn").click(function(){$(".printapp").printThis()}),$(function(){$("input:text").each(function(){var e=$(this).val();$(this).focus(function(){$(this).val()==e&&$(this).val("")}),$(this).blur(function(){""==$(this).val()&&$(this).val(e)})})}),$(function(){$("textarea").each(function(){var e=$(this).val();$(this).focus(function(){$(this).val()==e&&$(this).val("")}),$(this).blur(function(){""==$(this).val()&&$(this).val(e)})})}),$(".footer a[href^='http://']").attr("target","_blank"),$(".cal-c.mini .cal ul li ol ").each(function(){var e=$(this).children().length;e>1?$(this).parent().addClass("twoevent"):1==e&&$(this).parents().addClass("oneevent")}),$(".faq-item").click(function(e){return $(e.target).hasClass("faq-title")?($(this).toggleClass("active"),$(this).children(".faq-title").toggleClass("active"),$(this).children(".faq-content").slideToggle(),!1):void 0}),$("#faqSearch").keyup(function(){var e=$(this).val().toLowerCase();""===e?$(".faq-list li").removeClass("inactive"):$(".faq-list li").each(function(){var t=$(this).children().text().toString().toLowerCase();t.match(e)?$(this).removeClass("inactive"):$(this).addClass("inactive")})}),$("#month-select").change(r),$("#year-select").change(r),$(".calstring").click(function(e){var t=document.getElementById("month-select").value,a=document.getElementById("year-select").value,l=$(".calstring").attr("href");e.preventDefault(),window.location=l+"?calmonth="+t+"&calyear="+a}),$("#fNext").click(function(e){e.preventDefault(),window.location=h("next")}),$("#fPrev").click(function(e){e.preventDefault(),window.location=h("prev")}),$(".cal-c .cal ul li ol").each(function(){var e=$(this).children().length;e>=1&&$(this).closest("li").addClass("scrolled")})});