$(() => {
  let element = document.getElementById('status');
  element.innerHTML = 'All Systems Online';
  $('#status').addClass('green');

  element = document.getElementById('today');
  let today = new Date().toString();
  today = today.split(' ').splice(1, 3);
  element.innerHTML = `Today, ${today.join(' ')} (GMT)`;
});

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

    let element = document.getElementById('bastion:bot');
    element.innerHTML = 'Service Unavailable';
    element.setAttribute('style', 'color: #DD0000');

    element = document.getElementById('status');
    element.innerHTML = 'Major Service Outage';
    $('#status').addClass('red');
    $('#status').removeClass('green yellow orange');
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

    let element = document.getElementById('bastion:guild');
    element.innerHTML = 'Service Unavailable';
    element.setAttribute('style', 'color: #DD0000');

    element = document.getElementById('status');
    element.innerHTML = 'Major Service Outage';
    $('#status').addClass('red');
    $('#status').removeClass('green yellow orange');
  },
  success: (guild) => {
    let element = document.getElementById('bastion:guild');
    element.innerHTML = 'Online';
    element.setAttribute('style', 'color: #71BF60');
  }
});

$.ajax({
  url: 'https://bastionbot.org',
  error: (response, type, exception) => {
    console.error({
      exception: exception,
      type: type,
      response: response
    });

    let element = document.getElementById('bastion:website');
    element.innerHTML = 'Service Unavailable';
    element.setAttribute('style', 'color: #DD0000');

    element = document.getElementById('status');
    element.innerHTML = 'Major Service Outage';
    $('#status').addClass('red');
    $('#status').removeClass('green yellow orange');
  },
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
  error: (response, type, exception) => {
    console.error({
      exception: exception,
      type: type,
      response: response
    });

    let element = document.getElementById('bastion:docs');
    element.innerHTML = 'Service Unavailable';
    element.setAttribute('style', 'color: #DD0000');

    element = document.getElementById('status');
    element.innerHTML = 'Major Service Outage';
    $('#status').addClass('red');
    $('#status').removeClass('green yellow orange');
  },
  statusCode: {
    200: () => {
      let element = document.getElementById('bastion:docs');
      element.innerHTML = 'Online';
      element.setAttribute('style', 'color: #71BF60');
    }
  }
});
