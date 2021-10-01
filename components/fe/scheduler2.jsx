
import { GanttComponent, Inject, Toolbar, Edit, Selection, Filter, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';



const Scheduler2 = (props) => {

    const tasks = props.data.map((task, index) => {
        if (props.dataName == 'projects') {
            if (index >= 0 && index <= 3) {
                return {
                    ...task,
                    StartDate: new Date('04/02/2019'),
                    EndDate: new Date('09/21/2019'),
                    Duration: 5, Progress: 30

                }
            }
            if (index >= 4 && index < 7) {
                return {
                    ...task,
                    StartDate: new Date('04/22/2019'),
                    EndDate: new Date('09/21/2019'),
                    Duration: 10, Progress: 70
                }
            }
            if (index >= 7 && index <= 10) {
                return {
                    ...task,
                    StartDate: new Date('05/02/2019'),
                    EndDate: new Date('09/21/2019'),
                    Duration: 15, Progress: 50
                }
            }
        } else {
            if (index >= 0 && index <= 3) {
                return {
                    ...task,
                    StartDate: new Date('05/02/2019'),
                    EndDate: new Date('09/21/2019'),

                    Duration: 15, Progress: 30

                }
            }
            if (index >= 4 && index < 7) {
                return {
                    ...task,
                    StartDate: new Date('04/22/2019'),
                    EndDate: new Date('09/21/2019'),
                    Duration: 10, Progress: 70
                }
            }
            if (index >= 7 && index <= 10) {
                return {
                    ...task,
                    StartDate: new Date('04/02/2019'),
                    EndDate: new Date('09/21/2019'),
                    Duration: 5, Progress: 50
                }
            }
        }
    })

    const taskFields = {
        name: 'TaskName',
        id: 'TaskID',
        description: 'description',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
    }
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        mode: 'Auto',
        newRowPosition: 'Top',
        showDeleteConfirmDialog: true
    };

    const labelSettings = {
        rightLabel: '${taskData.TaskName}',
        taskLabel: '${Progress}%'
    }

    const queryTaskbarInfo = (args) => {
        if (args.data.Progress == 50) {
            args.progressBarBgColor = "red";
        }
        else if (args.data.Progress == 70) {
            args.progressBarBgColor = "yellow";
        }
        else if (args.data.Progress == 30) {
            args.progressBarBgColor = "lightgreen";
        }
    }

    const toolbarOptions = ['Search'];

    return (
        <>

            <GanttComponent
                queryTaskbarInfo={(e) => queryTaskbarInfo(e)}
                allowFiltering={true}
                allowSelection={true}
                editSettings={editSettings}
                dataSource={tasks}
                taskFields={taskFields}
                rowHeight={50}
                taskbarHeight={40}
                height='650px'
                labelSettings={labelSettings}
                toolbar={toolbarOptions}
            >

                <Inject services={[Selection, Edit]} />
                <ColumnsDirective>
                    <ColumnDirective field='TaskID' > </ColumnDirective>
                    <ColumnDirective field='TaskName' headerText='Task Name' width='180'> </ColumnDirective>
                    <ColumnDirective field='description' headerText='Description' width='160'> </ColumnDirective>
                    <ColumnDirective field='Duration' width='100'> </ColumnDirective>
                </ColumnsDirective>
            </GanttComponent>
        </>
    )
}


export default Scheduler2