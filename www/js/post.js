 $(document).bind('deviceready', function(){
    $(function(){
        $('form').submit(function(){
            var landmarkID = $(this).parent().attr('data-landmark-id');
            var postData = $(this).serialize();
            //var spanValue  = $('#camera_status').text();
            var input = document.getElementById('group_802736113_3'),//.value;
                         input = group_802736113_3.value;
                         
            $.ajax({
                type: 'POST',
                data: postData +'&lid='+landmarkID + input,
                //change the url for your project
                url: 'https://docs.google.com/forms/d/1Ngovqo8yr-SoJ93XaGOGFibmWhxUOVklztHz8IYhh_g/formResponse',
                success: function(data){
                    console.log(data);
                    alert('Your comment was successfully added');
                },
                error: function(){
                    console.log(data);
                    alert('There was an error adding your comment');
                }
            });
            
            return false;
        });
    });
});
