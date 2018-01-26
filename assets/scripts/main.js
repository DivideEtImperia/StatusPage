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
    let element = document.getElementById('bastion:bot');
    element.innerHTML = bastion.status.charAt(0).toUpperCase() + bastion.status.substr(1).toLowerCase();
    element.setAttribute('style', 'color: #71BF60');
  }
});

$.ajax({
  url: 'https://discordapp.com/api/guilds/267022940967665664/embed.json',
  dataType: 'json',
  error: (response, type, exception) => {
    console.error({
      exception: exception,
      type: type,
      response: response
    });
  },
  success: (guild) => {
    let element = document.getElementById('bastion:guild');
    element.innerHTML = 'Online';
    element.setAttribute('style', 'color: #71BF60');
  }
});

$.ajax({
  url: 'https://bastionbot.org',
  statusCode: {
    200: () => {
      let element = document.getElementById('bastion:website');
      element.innerHTML = 'Online';
      element.setAttribute('style', 'color: #71BF60');
    }
  }
});

$.ajax({
  url: 'https://docs.bastionbot.org',
  statusCode: {
    200: () => {
      let element = document.getElementById('bastion:docs');
      element.innerHTML = 'Online';
      element.setAttribute('style', 'color: #71BF60');
    }
  }
});
