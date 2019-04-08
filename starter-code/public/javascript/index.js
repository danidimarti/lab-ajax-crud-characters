const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()

      .then(response => {
        response.data.forEach(element => {
          $(".name").html("Character Name: " + element.name)
          $(".occupation").html("Character Occupation: " + element.occupation)
          if (element.cartoon === true) {
            var toYes = "Yes"
          } else var toYes = "No"
          $(".cartoon").html("Is a Cartoon? " + toYes)
          $(".weapon").html("Character Weapon: " + element.weapon)
               
        })
        $(".characters-container").append("<div class='character-info'>")
      })
      .catch(err => {
        console.log(err);
      })
  }



  document.getElementById('fetch-one').onclick = function () {
    var id = $("#character-id").val();
    charactersAPI.getOneRegister(id)

      .then(response => {
        $(".name").html("Character Name: " + response.data.name)
        $(".occupation").html("Character Occupation: " + response.data.occupation)
        if (response.data.cartoon === true) {
          var toYes = "Yes"
        } else var toYes = "No"
        $(".cartoon").html("Is a Cartoon? " + toYes)
        $(".weapon").html("Character Weapon: " + response.data.weapon)
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  document.getElementById('delete-one').onclick = function () {
    var id = $("#character-id").val();
    charactersAPI.deleteOneRegister(id)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    // document.getElementById("edit-weapon").value = 
    // document.getElementById("").setAttribute
  }

  document.getElementById('new-character-form').onsubmit = function () {
    var name = $("#create-name").val();
    var occupation = $("#create-occupation").val();
    var weapon = $("#create-weapon").val()
    var cartoon = $("#create-checkbox").val()

    var newCharacter = charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
    newCharacter.save()
      .then(char => {

        console.log(char);
      })
      .catch(err => {
        console.log(err);
      });
  }
})
