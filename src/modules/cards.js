function cards() {
    const wrapper = document.querySelector(".wrapper")

    class Card {
        constructor(title, image, id, price, parent) {
            this.title = title;
            this.image = image;
            this.id = id;
            this.classes = ["w-[296px]", "md:w-[296px]", "flex", "flex-col", "gap-y-3", "group"];
            this.price = price
            this.parent = parent
        }
        render() {
            const element = document.createElement('div');
            element.tabIndex = 0
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <div class="relative  h-[300px] w-[300px] border rounded">
                <span class="uppercase text-xs bg-black text-[#FEF3C7] rounded p-2 absolute left-[12px] top-[12px]"
                >used</span>
                <img
                    src="${this.image}"
                    alt=""
                    class="object-fill"
                />
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col">
                    <h3>${this.title}</h3>
                    <p>${this.price || "000"} KR.</p>
                </div>
                <p class="font-normal text-sm text-right">
                    <span class="font-medium text-sm"
                    >Condition</span
                    ><br />
                    Slightly used
                </p>
            </div>
            <a
                class="uppercase text-base bg-black text-white rounded py-4 text-center lg:invisible  group-hover:visible"
                href="#"
                >PICK-UP IN 2200</a>
            `;
            this.parent.append(element);
        }
    }

    function removeLoading() {
        wrapper.textContent = ''
    }
    function logError() {
        wrapper.textContent = 'something is wrong, update page, or try later :('
    }
    function changeData(arr) {
        return arr.map(card => ({
            title: card?.title.length < 25 ? card?.title : card?.title.slice(0, 25) + '...',
            id: card?.id,
            image: card?.images[0].src,
            price: card?.price
        }))
    }

    fetch('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
        .then(data => {
            if (!data.ok) {
                removeLoading()
                throw new Error()
            }
            return data
        })
        .then(data => data.json())
        .then(data => {
            removeLoading()
            changeData(data.products).forEach(({ title, image, id, price }) => {
                new Card(title, image, id, price, wrapper).render();
            });
        })
        .catch((e) => {
            console.log(e)
            logError()
        })

}
export default cards