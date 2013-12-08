describe("Doorkeeper", function() {
  var doorkeeper;

  beforeEach(function() {
    doorkeeper = new Doorkeeper();
    spyOn(Doorkeeper.prototype, "eventCallback");
  });

  it("doorkeeperオブジェクトが存在すること", function() {
      expect(doorkeeper).not.toBeNull();
  });

    it("コールバックが呼ばれること", function(){
        doorkeeper.search();

        waitsFor(function(){
            return doorkeeper.eventCallback.calls.length > 0;
        });

        runs(function(){
            expect(doorkeeper.eventCallback.calls.length).toBeGreaterThan(1);
        });
    });

});