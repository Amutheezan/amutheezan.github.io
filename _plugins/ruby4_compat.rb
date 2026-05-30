# Compatibility shim for Ruby 3.2+ where tainted?/taint were removed.
# Required by Liquid 4.0.3 and other older gems pinned by github-pages.
class Object
  def tainted?
    false
  end

  def taint
    self
  end

  def untaint
    self
  end
end
