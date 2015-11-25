var WWE = WWE || {};

WWE.firebase = new Firebase('https://wwe-2k16-fazio.firebaseio.com/test-universe');

WWE.init = function () {
    $("#date-month").selectize({
        options: WWE.config.months,
        selectOnTab: true,
        valueField: 'id',
        maxItems: 1
    });

    $(".setting-group > .btn, .match-type-group > .btn").on('click', function (e) {
        WWE.bindActiveButton(this);
    });

    WWE.firebase.limitToLast(10).on('value', function (snapshot) {
        var output = "<ul>";

        $.each(snapshot.val(), function (id, entry) {
            output = "<li>" + JSON.stringify(entry) + "</li>\n" + output;
        });

        $("#matches").html('<p>' + output + '</ul></p>');
    });

    $(".match-type-button").on('click', function (e) {
        var matchTypeId = this.id,
            defaultMatchSubType,
            matchTypes = '';
        $.each(WWE.config.matchTypes[this.id], function (matchSubTypeId, matchSubTypeInfo) {
            if (!defaultMatchSubType) defaultMatchSubType = matchSubTypeId;
            matchTypes += '<button type="button" id="' + matchSubTypeId + '" data-match-type="' + matchTypeId + '" class="btn btn-default match-subtype-button">' + matchSubTypeInfo.text + '</button>';
        });
        $(".match-subtype-group").html(matchTypes);

        $(".match-subtype-group > .btn").on('click', function (e) {
            var $this = $(this);
            WWE.bindActiveButton(this);
            WWE.addWrestlers($this.data('match-type'), this.id);
        });

        $("#" + defaultMatchSubType).click();
    });

    $("#1v1").click();
};

WWE.addWrestlers = function (matchTypeId, matchSubTypeId) {
    console.log("Add ", matchTypeId, matchSubTypeId);
    //<input id="wrestler-a" class="wrestler-input form-control" type="text"/>
    var matchInfo = WWE.config.matchTypes[matchTypeId][matchSubTypeId],
        wrestlerCount = 2, //Default for 1v1 match
        output = '<ul class="list-group">';

    console.log("Match info", matchInfo, matchTypeId, matchSubTypeId);

    switch (matchTypeId) {
        case '2v2':
            wrestlerCount = 4;
            break;
        case 'triple':
            wrestlerCount = 3;
            break;
        case 'four-way':
            wrestlerCount = 4;
            break;
        case 'six-man':
            wrestlerCount = 6;
            break;
        case 'handicap':
            wrestlerCount = matchInfo.teamSizes[0] + matchInfo.teamSizes[1];
            break;
        case 'tournament':
            wrestlerCount = 1; //TODO: Put in real values
            break;
        case 'royal-rumble':
            wrestlerCount = parseInt(matchSubTypeId.replace(/-Man/gi, ""));
            break;
    }

    for(var x=0;x<wrestlerCount;x++) {
        if(matchInfo.teams && (x === wrestlerCount / 2)) {
            output += '</ul><ul class="list-group">';
        }

        output += '<li class="list-group-item">';
        output += '<input id="wrestler-' + x + '" class="wrestler-input" type="text"/>';
        output += '</li>';
    }

    output += '</ul>';

    $(".wrestler-input-group").html(output);

    $(".wrestler-input").selectize({
        options: WWE.config.wrestlers,
        valueField: 'id',
        labelField: 'name',
        searchField: ['name'],
        maxItems: 1,
        selectOnTab: true
    });

    console.log('Add wrestlers', matchTypeId);
};

WWE.loadData = function () {

    var month = parseInt($("#date-month").val()),
        year = parseInt($("#date-year").val()),
        setting = $(".setting-group > .active").text(),
        matchType = $(".match-type-group > .active").text(),
        matchSubType = $(".match-subtype-group > .active").text(),
        errorField = $(".error-field");

    if (!month || !year || !setting || !matchType || !matchSubType) {
        errorField.show();
        return {};
    } else {
        errorField.hide();
        return {
            'timestamp': moment().format('YYYY-MM-DD HH:mm:ss'),
            'month': month,
            'year': year,
            'setting': setting,
            'matchType': matchType,
            'matchSubType': matchSubType,
            'participants': {}
        }
    }
};

WWE.bindActiveButton = function (button) {
    $(button).addClass("active").siblings().removeClass("active");
};

WWE.saveData = function (data) {
    data = data || WWE.loadData();

    console.log("Data = ", data);

    if (data) {
        WWE.firebase.push(data);
    }
};

$(document).on('ready', function () {
    WWE.init();
});