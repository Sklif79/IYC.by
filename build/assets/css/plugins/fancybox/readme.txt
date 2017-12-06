http://fancyapps.com/fancybox/

js

$('a.modalbox').fancybox({
        closeBtn: true,
        padding: 0,
        margin: [60, 14, 0, 14],
        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(51,51,51,0.7)'
                }
            }
        }
    });

----------------------------------------------------------------------------------

html            
               
<a href="assets/images/about/about-page-2.jpg" class="modalbox" rel="slider-group">
    <img src="assets/images/about/about-page-2.jpg" alt="">
</a>

----------------------------------------------------------------------------------
модальное окно


<a href="#feedback" class="modalbox">Обратная связь</a>

<div id="feedback" style="display: none;"><!-- hidden inline form -->
    <h2>Отправка сообщения</h2>
    <form id="f_contact" name="contact" action="#" method="post">
        <label for="f_name">Ваше имя</label><br>
        <input type="text" id="f_name" name="f_name"><br>
        
        <button id="f_send">Отправить E-mail</button>
    </form>
</div>







------------------------------------------------------------
http://smartlanding.biz/ajax-forma-v-modalnom-okne.html
успешная отправка формы


$("#form").submit(function() {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            })
                .done(function() {
                    $(this).find("input").val("");
                    $("#form").trigger("reset");
					$(".mySelector").fancybox();
                });
            return false;
        });