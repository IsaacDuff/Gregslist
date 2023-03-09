
import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { setHTML } from "../Utils/Writer.js"
import { Job } from "../Models/Job.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"


function _drawJobs() {
    // console.log('drawing job');
    const jobs = appState.jobs
    let template = ''
    jobs.forEach(j => template += j.JobCard)
    setHTML('listings', template)
}

function _drawJobForm() {
    setHTML('form', Job.JobForm())
}



export class JobsController {

    constructor() {
        console.log('jobs controller loaded', appState.jobs);
        _drawJobs()
        appState.on('jobs', _drawJobs)
    }

    showJobs() {
        _drawJobs()
        _drawJobForm()
    }

    createJob() {
        event.preventDefault()
        console.log('creating a job');
        const form = event.target
        console.log(form.position.value, form.company.value, form.shift.value);
        let formData = getFormData(form)
        console.log(formData)
        jobsService.createJob(formData)
        form.reset()
    }

    async deleteJob(id) {
        if (await Pop.confirm("Are you sure you with to delete")) {
            jobsService.deleteJob(id)
        }
    }

}