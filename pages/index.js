import Scheduler2 from "../components/fe/scheduler2"
import { useMemo, useState } from "react"


export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()

    const res2 = await fetch('https://jsonplaceholder.typicode.com/users')
    const data2 = await res2.json()


    const tasks = data.map((task) => {
        return {
            TaskID: task.id,
            TaskName: task.title,
            // StartDate: new Date('04/02/2019'),
            // EndDate: new Date('04/21/2019'),
            description: task.title,
            subtasks: []
        }

    }).filter((task, index) => {
        return index < 10
    })

    const users = data2.map((user) => {
        return {
            TaskID: user.id,
            TaskName: user.name,
            // StartDate: new Date('04/02/2019'),
            // EndDate: new Date('04/21/2019'),
            description: user.email,
            subtasks: []
        }

    }).filter((user, index) => {
        return index < 10
    })

    if (!data || !data2) {
        return {
            notFound: true,
        }
    }

    return {
        props: { tasks, users },
    }
}


const Gantt1 = (props) => {

    const [view, changeTheView] = useState('projects')

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useMemo(() => {
        if (view === 'persons') {
            return props.users
        }
        if (view === 'projects') {
            return props.tasks
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view])



    return (
        <>
            <div className="flex align-center justify-between">
                <div className="">
                    <button onClick={() => changeTheView('persons')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 " >
                        Persons
                    </button>
                    <button onClick={() => changeTheView('projects')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8" >
                        Projects
                    </button>
                </div>
                <div>
                    <input className="border py-2 px-40 my-2 text-grey-darkest rounded" type="text" name="first_name" id="first_name" />
                </div>
                <div className="p-2">
                    <p>
                        Talos for Perficient
                    </p>
                </div>
            </div>

            <Scheduler2 data={data} dataName={view} />
        </>
    )
}

export default Gantt1