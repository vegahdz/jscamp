import { state } from './config.js'

state.count++

// console.log(state)

const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')

filter.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filter.value

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`
  } else {
    mensaje.textContent = ''
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
})



const inputSearch = document.querySelector('#empleos-search-input');

inputSearch.addEventListener('input', function () {

  const searchValue = inputSearch.value.toLowerCase();
  console.log(searchValue);

  const jobs = document.querySelectorAll('.job-listing-card')


  jobs.forEach(job => {
    const titleText = job.querySelector('h3').textContent.toLowerCase()
    // console.log(titleText);
    const coincide = titleText.includes(searchValue);
    console.log(coincide);
    job.classList.toggle('is-hidden', !coincide)
  });

});