import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { saveState } from "../Utils/Store.js";



function _saveJobs() {
    saveState('jobs', appState.jobs)
}

class JobsService {
    createJob(formData) {
        console.log(formData)
        let job = new Job(formData)
        appState.jobs.push(job)
        appState.emit('jobs')
        _saveJobs()
    }

    deleteJob(id) {
        let jobFilter = appState.jobs.filter(j => j.id != id)
        console.log('found', jobFilter);
        appState.jobs = jobFilter

        appState.emit('jobs')
        _saveJobs()
    }
}

export const jobsService = new JobsService