/*
function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      if (mutation.type="childList") { 
        
                if (mutation.addedNodes){
                    
                let changedCount= Number((mutation.addedNodes[3]?.children[0]?.innerHTML)??'0');
                if(count<changedCount)
                {
                    console.log("added item") ;
                    dataLayer.push({"event": "added_item"}) ;
                    count = changedCount ;

                }
                else{
                    console.log("item removed") ;
                    dataLayer.push({"event": "removed_item"}) ;
                    count = changedCount ;
                }

                console.log(count);
                }
                
            //     if(mutation.removedNodes)
            //     {
            //   console.log("removed changes");
            //   console.log((mutation.addedNodes[3]?.children[0]?.innerHTML));
            //     }
      }
    });
  }

const targetNode = document.querySelector(".header__icon--cart");
console.log(document.querySelector(".header__icon--cart"));
const observerOptions = {
  childList: true,
  attributes: true,

  // Omit (or set to false) to observe only changes to the parent node
//   subtree: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);
*/

//alert("Added to main page");

//no


const container = document.querySelector('.has-scrollbar');
const contents = document.querySelectorAll('.slider-item');
// let scrollPos = 0;
// const interval = setInterval(() => {
//     scrollPos += container.offsetWidth; // scroll one child element width at a time
//     container.scrollTo({ left: scrollPos, behavior: "smooth" });

//     // if the end is reached, reset the scroll position to the start
//     if (scrollPos >= container.scrollWidth - container.offsetWidth) {
//       scrollPos = 0;
//     }
//   }, 1000); // scroll after every 3 seconds


let index = 0;
let scrollPos = 0;
const interval = setInterval(() => {
  // scroll one content item width at a time
  scrollPos += container.offsetWidth;
  container.scrollTo({ left: scrollPos, behavior: "smooth" });

  // if the end is reached, append the first content item to the end of the container
  if (scrollPos >= container.scrollWidth - container.offsetWidth) {
    container.scrollTo({ left: 0, behavior: "smooth" }); // scroll to the first item without animation
    
    scrollPos = 0;

    // reset the index to 0 if it goes beyond the number of items
  }
}, 3000);