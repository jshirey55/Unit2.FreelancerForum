    const freelancers = [
        { name: "Alice", price: 30, job: "Writer" },
        { name: "Bob", price: 50, job: "Teacher" },
    ];

    const carol = [
        { name: "Carol", price: 70, job: "Programmer" },
    ];

    const newFreelancers = [
        { name: "Dr. Slice", price: 25, job: "gardener" },
        { name: "Dr. Pressure", price: 51, job: "programmer" },
        { name: "Prof. Possibility", price: 43, job: "teacher" },
        { name: "Prof. Prism", price: 81, job: "teacher" },
        { name: "Dr. Impulse", price: 43, job: "teacher" },
        { name: "Prof. Spark", price: 76, job: "programmer" },
        { name: "Dr. Wire", price: 47, job: "teacher" },
        { name: "Prof. Goose", price: 72, job: "driver" },
        ];
    

    const addFreelancer = () => {
        const newlancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)]
            freelancers.push(newlancer)

            data()
}

function addTable() {
    
    const root = document.querySelector("#root")

    console.log(freelancers.length)

    const totalPrice = freelancers.reduce((acc, freelancer) => acc + (freelancer.price),
        0
    )
        const average = totalPrice / freelancers.length
        console.log(average)
    
    const h1 = document.createElement("h1")
    h1.innerHTML = "Freelancers"
    root.append(h1)

    const h2 = document.createElement("h2")
    h2.innerHTML = "The average starting price is $" + average
    root.append(h2)

    const freelancerTable = document.createElement("table")
    const thead = document.createElement("thead")
    const tbody = document.createElement("tbody")

    for(let key of Object.keys(freelancers[0])){
        const th = document.createElement("th")
        th.innerText = key
        thead.appendChild(th)
    }

    freelancerTable.appendChild(thead)
    freelancerTable.appendChild(tbody)

    root.appendChild(freelancerTable)

    data()
}

function data() {
    const freelancerTable = document.querySelector("tbody")

    const workerElements = freelancers.map((freelancer) => {
        const row = document.createElement("tr")

        const freeName = document.createElement("td")
        freeName.innerHTML = freelancer.name

        const freePrice = document.createElement("td")
        freePrice.innerHTML = "$" + freelancer.price

        const freeJob = document.createElement("td")
        freeJob.innerHTML = freelancer.job

        row.appendChild(freeName)
        row.appendChild(freePrice)
        row.appendChild(freeJob)
        return row
    })

    freelancerTable.replaceChildren(...workerElements)
}


addTable()

//setInterval(addFreelancer, 1000)


