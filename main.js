$(document).ready(function () {
    let editTask = null;
    $("#addBtn").click(function () {
        let taskText = $("#taskInput").val().trim();
        if (taskText == "") {
            return;
        }

        if (editTask != null) {
            editTask.find(".task-text").text(taskText);
            editTask = null;

        } else {
            let task = `
                <div class="task">
                    <input type="checkbox" class="check">
                    <span class="task-text">${taskText}</span>
                    <button class="edit">✎</button>
                    <button class="delete">🗑</button>
                </div>
            `;

            $("#taskList").append(task);
        }
        $("#taskInput").val("");
    });

    $(document).on("change", ".check", function () {
        $(this)
            .siblings(".task-text")
            .toggleClass("completed");
    });

    $(document).on("click", ".delete", function () {
        $(this).parent(".task").remove();
    });

    $(document).on("click", ".edit", function () {
        editTask = $(this).parent(".task");
        let text = editTask.find(".task-text").text();
        $("#taskInput").val(text);
        $("#taskInput").focus();
    });
});