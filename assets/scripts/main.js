let sp = new StatusPage.page({ page : 'srhpyqt94yxb' });
sp.summary({
  success : (data) => {
    let components = data.components.filter(component => /(API|Gateway|CloudFlare|Media Proxy)/i.test(component.name));
    for (let component of components) document.getElementById(`discord:${component.name.toLowerCase().replace(/ /g, '-')}`).innerHTML = component.status.charAt(0).toUpperCase() + component.status.substr(1).toLowerCase();
  }
});

$.ajax({
  url: 'https://discordbots.org/api/bots/267035345537728512/status',
  dataType: 'json',
  error: (response, type, exception) => {
    console.error({
      exception: exception,
      type: type,
      response: response
    });
  },
  success: (bastion) => {
    document.getElementById('bastion:bot').innerHTML = bastion.status.charAt(0).toUpperCase() + bastion.status.substr(1).toLowerCase();
  }
});

$.ajax({
  url: 'https://bastionbot.org',
  statusCode: {
    200: () => {
      document.getElementById('bastion:website').innerHTML = 'Online';
    }
  }
});
