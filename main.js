var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","http://clipground.com/images/lil-clipart-8.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Manish Jain","Manya Jain","Parnika (Pari) Jain","Garima Jain"];
var i = 0;
function next_image() {
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    {
      i = 0
    }
    var updatedImage = [images];
    var updatedName = [names];
    i++
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}