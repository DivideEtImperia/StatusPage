let sp = new StatusPage.page({ page : 'srhpyqt94yxb' });
sp.summary({
  success : (data) => {
    let components = data.components.filter(component => /(API|Gateway|CloudFlare|Media Proxy)/i.test(component.name));
    for (let component of components) document.getElementById(`discord:${component.name.toLowerCase().replace(/ /g, '-')}`).innerHTML = component.status.charAt(0).toUpperCase() + component.status.substr(1).toLowerCase();
  }
});
