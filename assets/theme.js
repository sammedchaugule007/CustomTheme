
function callback(mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case "childList":
          /* One or more children have been added to and/or removed
             from the tree.
             (See mutation.addedNodes and mutation.removedNodes.) */
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
          break;
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
