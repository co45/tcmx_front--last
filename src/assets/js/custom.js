import 'alpinejs';

var x=2;

function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "0";
  }

  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function sidectrl(){
    if(x%2==0){
      closeNav();
      x++;
    }else{
      openNav();
      x++;
    }
  }
  
  $(".checkbox-dropdown").click(function () {
    $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function(e) {
    e.stopPropagation();
});

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

}
/*-------*/
function dropdown() {
  return {
      options: [],
      selected: [],
      show: false,
      open() { this.show = true },
      close() { this.show = false },
      isOpen() { return this.show === true },
      select(index, event) {

          if (!this.options[index].selected) {

              this.options[index].selected = true;
              this.options[index].element = event.target;
              this.selected.push(index);

          } else {
              this.selected.splice(this.selected.lastIndexOf(index), 1);
              this.options[index].selected = false
          }
      },
      remove(index, option) {
          this.options[option].selected = false;
          this.selected.splice(index, 1);


      },
      loadOptions() {
          const options = document.getElementById('select').options;
          for (let i = 0; i < options.length; i++) {
              this.options.push({
                  value: options[i].value,
                  text: options[i].innerText,
                  selected: options[i].getAttribute('selected') != null ? options[i].getAttribute('selected') : false
              });
          }


      },
      selectedValues(){
          return this.selected.map((option)=>{
              return this.options[option].value;
          })
      }
  }
}