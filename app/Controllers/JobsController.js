
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



export class JobsController {

    constructor() {
        console.log("hello from the jobs controller")
    }

    showJobs() {
        _drawJobs()
        _drawJobForm()
    }
}