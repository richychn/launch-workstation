/*global chrome*/

import {useState} from 'react';
import {v1 as uuid} from 'uuid';

const getWorkstations = () => {
    let workstations = window.localStorage.getItem('workstations');

    if (!workstations) {
        return [];
    }

    return JSON.parse(workstations)
}

const useWorkstations = () => {
    const [workstations, setWorkstations] = useState(getWorkstations());

    const updateWorkstations = (newWorkstations) => {
        const stringifiedWorkstations = JSON.stringify(newWorkstations);
        window.localStorage.setItem('workstations', stringifiedWorkstations);
        setWorkstations(newWorkstations);
    };

    const addUrl = (id) => {
        const workstationIdx = workstations.findIndex(
            workstation => workstation.id === id);
        let newWorkstations = [...workstations];
        let newUrls = newWorkstations[workstationIdx].urls

        chrome.tabs.query({'active': true}, function (tabs) {
            newUrls = [...newUrls, tabs[0].url]
            newWorkstations[workstationIdx].urls = newUrls;
            updateWorkstations(newWorkstations);
        });
    }

    const addWorkstation = (label) => {
        const newWorkstation = { label, urls: [], id: uuid() };
        updateWorkstations([...workstations, newWorkstation]);
    };

    const openWorkstation = (id) => {
        const workstationIdx = workstations.findIndex(
            workstation => workstation.id === id);
        workstations[workstationIdx].urls.map(function(url) {
            chrome.tabs.create({ url: url });
        })
    }

    const deleteWorkstation = (id) => {
        const newWorkstations = workstations.filter(function(ws){return ws.id !== id});
        updateWorkstations(newWorkstations);
    }

    return [workstations, addWorkstation, addUrl, openWorkstation, deleteWorkstation]
}

export default useWorkstations;