$("nav a").on("click", function (event) {
  
    event.preventDefault()
    
    const href = $(this).attr("href")
    
    window.history.pushState(null, null, href)
    
    $("nav a").removeClass("active")
    $(this).addClass("active")
    
    $.ajax({
      url: href,
      success: function (data) {
        $("div.wrapper").fadeOut(500, function () {
          const newPage = $(data).filter("div.wrapper").html()
          
          $("div.wrapper").html(newPage)
          
          $("div.wrapper").fadeIn(500)
        })
      }
    })
    
  })