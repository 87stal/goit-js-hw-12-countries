import listCountriesTemplate from '../Templates/listCountries.hbs';
import countrieTemplate from '../Templates/countrie.hbs';
import refs from './refs';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

function updateContriesMarkup(countries) {
  const markup = listCountriesTemplate(countries);
  const markupOne = countrieTemplate(countries);
  console.log(countries.length);

  if (countries.length > 1) {
    refs.countriesList.insertAdjacentHTML('beforeend', markupOne);
    if (countries.length > 10) {
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
      };
      toastr['warning'](
        'Please enter a more specific query!',
        'Too many matches found.',
      );
    }
  } else refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

export default updateContriesMarkup;
