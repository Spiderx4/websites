// bagItems is an array which stores id of products
let bagItems;
OnLoad();

function OnLoad()
    {
        let bagItemStr = localStorage.getItem('bagItems');
        bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
        displalyItemOnHomePage();
        displayBagIcon();
    }

function addToBag(itemId)
    {
        bagItems.push(itemId);
        localStorage.setItem('bagItems',JSON.stringify(bagItems));
        displayBagIcon();
    }

function displayBagIcon()
    {
        let bagItemCountElement = document.querySelector('.bag-item-count');

        if(bagItems.length> 0)
            {
                bagItemCountElement.style.visibility = 'visible';
                bagItemCountElement.innerText = bagItems.length;
            }
        else
            {
                bagItemCountElement.style.visibility = 'hidden';
            }
    }

function displalyItemOnHomePage()
    {
        let itemsContainerElement = document.querySelector('.items-container');

        if(!itemsContainerElement)
            {
                return;
            }

        let inner = '';
        item.forEach((item) =>
            {
                inner += `
                
                    <div class="item-container">
                        <img src="${item.item_image}" alt="" class="item-img">
                        <div class="rating">
                            ${item.stars} ⭐ | ${item.no_of_reviews}
                        </div>
                        <div class="company-name">${item.company_name}</div>
                        <div class="item-name">${item.item_name}</div> 
                        <div class="price">
                            <span class="current-price">Rs ${item.current_price}</span>
                            <span class="original-price">Rs ${item.original_price}</span>
                            <span class="discount">(${item.discount_percentage}% OFF)</span>
                        </div>
                        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
                    </div>`;
            }
        );
        
        itemsContainerElement.innerHTML = inner;
    }



